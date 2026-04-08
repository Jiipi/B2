
const fs = require("fs");
let content = fs.readFileSync("app.js", "utf8");

const startIdx = content.indexOf("    writing_test1: [");
const endStr = "    writing_test8: [";
const endBlockIdx = content.indexOf(endStr);
const nextEnd = content.indexOf("    ]", endBlockIdx);
let veryEnd = content.indexOf("};", nextEnd);
if (veryEnd === -1 || veryEnd < nextEnd) {
    console.log("Could not find };");
}

let toReplace = content.substring(startIdx, veryEnd + 2);

const newWriting_1 = `    writing_test1: [
        {
            isWriting: true,
            prompt: \`<h3>Writing Task 1</h3>
<p><strong>You should spend about 20 minutes on this task.</strong></p>
<p><strong>The table below shows the percentage of household income spent on four categories (food, housing, transport and education) in five countries.</strong></p>
<p><strong>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</strong></p>
<p><strong>Write at least 150 words.</strong></p>
<table border="1" cellpadding="5" cellspacing="0" style="width:100%; text-align:center; margin-top:1rem; border-collapse: collapse;">
  <tr>
    <th>Country</th>
    <th>Food (%)</th>
    <th>Housing (%)</th>
    <th>Transport (%)</th>
    <th>Education (%)</th>
  </tr>
  <tr>
    <td>Viet Nam</td>
    <td>35</td>
    <td>25</td>
    <td>15</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Thailand</td>
    <td>30</td>
    <td>22</td>
    <td>18</td>
    <td>8</td>
  </tr>
  <tr>
    <td>Japan</td>
    <td>20</td>
    <td>30</td>
    <td>25</td>
    <td>7</td>
  </tr>
  <tr>
    <td>USA</td>
    <td>15</td>
    <td>35</td>
    <td>30</td>
    <td>5</td>
  </tr>
  <tr>
    <td>France</td>
    <td>25</td>
    <td>28</td>
    <td>20</td>
    <td>6</td>
  </tr>
</table>\`,
            sample: \`<p><strong>I - Introduction</strong><br>
The table shows the percentage of household income spent on four categories, namely food, housing, transport and education, in five different countries.</p>
<p><strong>O - overview</strong><br>
Overall, people in Viet Nam and Thailand spend the highest proportions of their income on food, while households in the USA and Japan spend the most on housing and transport. Spending on education is the smallest category in all five countries.</p>
<p><strong>B1 (Nhóm VN + TL + Japan)</strong><br>
Looking at food and housing, Vietnamese households spends 35% of their income on food, the highest figure among all countries, compared with 30% in Thailand and only 20% in Japan. In contrast, housing takes up 30% of income in Japan and 35% in the USA, which are higher than the figures for VN and TL, at 25% and 22% respectively. France is in the middle, with 25% for food and 28% for housing.</p>
<p><strong>B2 (N2: Transport + Education)</strong><br>
For transport, the USA has the highest proportion, at 30%, followed by Japan with 25% and France with 20%. Viet Nam and TL spends less on this category, at 15% and 18%. Education accounts for the smallest share of income in all five countries. Viet Nam still spends the most on education at 10%, while the USA spends the least, at only 5%. The figures for TL, Japan and France are between 6% and 8%.</p>\`
        }
    ]
};`;

content = content.substring(0, startIdx) + newWriting_1 + content.substring(veryEnd + 2);

const targetIfsStart = content.indexOf("} else if (currentTestId === \x27writing_test1\x27) {");
const targetIfsEnd = content.indexOf(`document.getElementById(\x27test-title\x27).textContent = \x27Writing Task 2 (8. Môi trý?ng - Ð? 2)\x27;
            }`);

if (targetIfsStart !== -1 && targetIfsEnd !== -1) {
    const endOffset = targetIfsEnd + `document.getElementById(\x27test-title\x27).textContent = \x27Writing Task 2 (8. Môi trý?ng - Ð? 2)\x27;
            }`.length;
    const newIfs = `} else if (currentTestId === \x27writing_test1\x27) {
                document.getElementById(\x27test-title\x27).textContent = \x27Writing Task 1 (Table)\x27;
            }`;
    content = content.substring(0, targetIfsStart) + newIfs + content.substring(endOffset);
} else {
    console.log("Could not find IF conditions");
}

fs.writeFileSync("app.js", content);
console.log("Done successfully.");

