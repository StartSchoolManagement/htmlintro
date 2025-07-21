import fs from "fs";

const html = fs.readFileSync("index.html", "utf-8");

const requiredTags = ["img", "a", "h1"];

let allFound = true;

for (const tag of requiredTags) {
  const regex = new RegExp(`<${tag}[\\s>]`, "i");
  if (!regex.test(html)) {
    console.log(`❌ Missing <${tag}> tag`);
    allFound = false;
  }
}

if (allFound) {
  console.log("✅ All required tags are present.");
  process.exit(0);
} else {
  process.exit(1);
}
