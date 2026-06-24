import {
  appendFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const componentNamePrefix = "r";
const componentNameArg = process.argv[2];

const DIR_SRC = normalize(join(__dirname, "template"));
const DIR_DEST = normalize(join(__dirname, "..", "..", "src", "components"));

if (!componentNameArg) {
  console.error("Usage: npm run add-component -- <componentName>");
  process.exit(1);
}

const ucfirst = (/** @type {string} */ s) =>
  s.charAt(0).toUpperCase() + s.substring(1);

const componentName = ((c) => {
  let name = c.charAt(0).toUpperCase() + c.slice(1);
  if (name.indexOf(componentNamePrefix.toUpperCase()) !== 0)
    name = componentNamePrefix + name;
  return name;
})(componentNameArg);

const componentDestDir = normalize(join(DIR_DEST, componentName));
if (existsSync(componentDestDir)) {
  console.error(
    `Component '${componentName}' exists in directory: ${componentDestDir}`,
  );
  process.exit(1);
}

const replaceComponentName = (/** @type {string} */ str) =>
  str
    .replaceAll("_componentName_", componentName)
    .replaceAll("_componentNameCapital_", ucfirst(componentName))
    .replaceAll("_componentNamePrefix_", componentNamePrefix)
    .replaceAll(
      "_componentNameNoPrefix_",
      componentName.slice(componentNamePrefix.length),
    )
    .replaceAll(
      "_componentNameNoPrefixLc_",
      componentName.slice(componentNamePrefix.length).toLowerCase(),
    );

const paths = readdirSync(DIR_SRC, { recursive: true });
paths.forEach((path) => {
  if (typeof path !== "string") return;

  const fullSrcPath = normalize(join(DIR_SRC, path));
  const fullDestPath = normalize(join(DIR_DEST, replaceComponentName(path)));

  const stat = lstatSync(fullSrcPath);

  if (stat.isDirectory()) {
    mkdirSync(fullDestPath, { recursive: true });
    console.log("wrote", fullDestPath);
    return;
  }

  const content = replaceComponentName(
    readFileSync(fullSrcPath, { encoding: "utf-8" }),
  );

  writeFileSync(fullDestPath, content);
  console.log("wrote", fullDestPath);
});

const componentsIndexPath = join(DIR_DEST, "index.ts");

writeFileSync(
  componentsIndexPath,
  [
    ...readFileSync(componentsIndexPath, { encoding: "utf-8" })
      .trim()
      .split("\n")
      .filter((s) => !!s),
    `export * from "./${componentName}";`,
  ]
    .sort()
    .join("\n"),
);
console.log("Appended export to ", componentsIndexPath);

console.log(`
Created component '${componentName}' 'at ${componentDestDir}'`);
