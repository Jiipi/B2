const farleyHouseSvg = `
<img src="images/farley_house_map.png" alt="Farley House Map" style="max-width: 100%; height: auto; display: block; margin: 0 auto; border: 1px solid #000;" />
`;

const opinionsHtml = `
<div class="opinions-box">
    <div class="opinions-title">Opinions</div>
    <div class="option-line">A. This is only relevant to young people.</div>
    <div class="option-line">B. This may have disappointing results.</div>
    <div class="option-line">C. This already seems to be widespread.</div>
    <div class="option-line">D. Retailers should do more to encourage this.</div>
    <div class="option-line">E. More financial support is needed for this.</div>
    <div class="option-line">F. Most people know little about this.</div>
    <div class="option-line">G. There should be stricter regulations about this.</div>
    <div class="option-line">H. This could be dangerous.</div>
</div>
`;

const tests = {
    test1: [
    {
        title: "PART 1 \u00A0 \u00A0 Questions 1-10",
        instruction: "Complete the notes below.<br><br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
        subHeader: "<h3 class='section-title'>Hinchingbrooke Country Park</h3>",
        questions: [
            { id: "q1", type: "gap_fill", preText: "<strong>The park</strong><br>Area: 1", postText: "hectares", answer: ["69"] },
            { id: "q2", type: "gap_fill", preText: "Habitats: wetland, grassland and woodland<br>Wetland: lakes, ponds and a 2", postText: "", answer: ["stream"] },
            { id: "q_text1", type: "text", text: "Wildlife includes birds, insects and animals<br><br><strong>Subjects studied in educational visits include</strong>" },
            { id: "q3", type: "gap_fill", preText: "Science: Children look at 3", postText: "about plants, etc.", answer: ["data"] },
            { id: "q4", type: "gap_fill", preText: "Geography: includes learning to use a 4", postText: "and compass", answer: ["map"] },
            { id: "q_text2", type: "text", text: "History: changes in land use" },
            { id: "q5", type: "gap_fill", preText: "Leisure and tourism: mostly concentrates on the park's 5", postText: "", answer: ["visitors", "visitor"] },
            { id: "q6", type: "gap_fill", preText: "Music: Children make 6", postText: "with natural materials, and experiment with rhythm and speed.", answer: ["sounds", "sound"] },
            { id: "q_text3", type: "text", text: "<br><strong>Benefits of outdoor educational visits</strong>" },
            { id: "q7", type: "gap_fill", preText: "They give children a feeling of 7", postText: "that they may not have elsewhere.", answer: ["freedom"] },
            { id: "q8", type: "gap_fill", preText: "Children learn new 8", postText: "and gain self-confidence.", answer: ["skills", "skill"] },
            { id: "q_text4", type: "text", text: "<br><strong>Practical issues</strong>" },
            { id: "q9", type: "gap_fill", preText: "Cost per child: £ 9", postText: "", answer: ["4.95"] },
            { id: "q10", type: "gap_fill", preText: "Adults, such as 10", postText: ", free", answer: ["leaders", "leader"] }
        ]
    },
    {
        title: "PART 2 \u00A0 \u00A0 Questions 11-20",
        instruction: "<b>Questions 11-15</b><br>Choose the correct letter, <b>A, B</b> or <b>C</b>.<br><br><h3 class='section-title'>Stanthorpe Twinning Association</h3>",
        questions: [
            {
                id: "q11", type: "multiple_choice",
                text: "11 \u00A0 During the visit to Malatte, in France, members especially enjoyed",
                options: [
                    { value: "A", label: "A \u00A0 going to a theme park." },
                    { value: "B", label: "B \u00A0 experiencing a river trip." },
                    { value: "C", label: "C \u00A0 visiting a cheese factory." }
                ],
                answer: ["B"]
            },
            {
                id: "q12", type: "multiple_choice",
                text: "12 \u00A0 What will happen in Stanthorpe to mark the 25th anniversary of the Twinning Association?",
                options: [
                    { value: "A", label: "A \u00A0 A tree will be planted." },
                    { value: "B", label: "B \u00A0 A garden seat will be bought." },
                    { value: "C", label: "C \u00A0 A footbridge will be built." }
                ],
                answer: ["A"]
            },
            {
                id: "q13", type: "multiple_choice",
                text: "13 \u00A0 Which event raised most funds this year?",
                options: [
                    { value: "A", label: "A \u00A0 the film show" },
                    { value: "B", label: "B \u00A0 the pancake evening" },
                    { value: "C", label: "C \u00A0 the cookery demonstration" }
                ],
                answer: ["B"]
            },
            {
                id: "q14", type: "multiple_choice",
                text: "14 \u00A0 For the first evening with the French guests are advised to",
                options: [
                    { value: "A", label: "A \u00A0 take them for a walk round the town." },
                    { value: "B", label: "B \u00A0 go to a local restaurant." },
                    { value: "C", label: "C \u00A0 have a meal at home." }
                ],
                answer: ["C"]
            },
            {
                id: "q15", type: "multiple_choice",
                text: "15 \u00A0 On Saturday evening there will be the chance to",
                options: [
                    { value: "A", label: "A \u00A0 listen to a concert." },
                    { value: "B", label: "B \u00A0 watch a match." },
                    { value: "C", label: "C \u00A0 take part in a competition." }
                ],
                answer: ["A"]
            }
        ]
    },
    {
        title: "",
        instruction: "<b>Questions 16-20</b><br><br>Label the map below.<br><br>Write the correct letter, <b>A-H</b>, next to Questions 16-20.<br><h3 class='section-title'>Farley House</h3>" + farleyHouseSvg,
        questions: [
            { id: "q16", type: "gap_fill_flex", preText: "<b>16</b> \u00A0 Farm shop", postText: "", answer: ["G"] },
            { id: "q17", type: "gap_fill_flex", preText: "<b>17</b> \u00A0 Disabled entry", postText: "", answer: ["C"] },
            { id: "q18", type: "gap_fill_flex", preText: "<b>18</b> \u00A0 Adventure playground", postText: "", answer: ["B"] },
            { id: "q19", type: "gap_fill_flex", preText: "<b>19</b> \u00A0 Kitchen gardens", postText: "", answer: ["D"] },
            { id: "q20", type: "gap_fill_flex", preText: "<b>20</b> \u00A0 The Temple of the Four Winds", postText: "", answer: ["A"] }
        ]
    },
    {
        title: "PART 3 \u00A0 \u00A0 Questions 21-30",
        instruction: "<b>Questions 21-24</b><br>Choose <b>TWO</b> letters, <b>A-E</b>.",
        questions: [
            {
                id: "q_text_c1", type: "text", text: "<b>Questions 21 and 22</b>"
            },
            {
                id: "q21", type: "multiple_choice_multi",
                text: "Which <b>TWO</b> things did Colin find most satisfying about his bread reuse project?",
                options: [
                    { value: "A", label: "A \u00A0 receiving support from local restaurants" },
                    { value: "B", label: "B \u00A0 finding a good way to prevent waste" },
                    { value: "C", label: "C \u00A0 overcoming problems in a basic process" },
                    { value: "D", label: "D \u00A0 experimenting with designs and colours" },
                    { value: "E", label: "E \u00A0 learning how to apply 3-D printing" }
                ],
                answer: ["B", "D"]
            },
            {
                id: "q_text_c2", type: "text", text: "<b>Questions 23 and 24</b>"
            },
            {
                id: "q23", type: "multiple_choice_multi",
                text: "Which <b>TWO</b> ways do the students agree that touch-sensitive sensors for food labels could be developed in future?",
                options: [
                    { value: "A", label: "A \u00A0 for use on medical products" },
                    { value: "B", label: "B \u00A0 to show that food is no longer fit to eat" },
                    { value: "C", label: "C \u00A0 for use with drinks as well as foods" },
                    { value: "D", label: "D \u00A0 to provide applications for blind people" },
                    { value: "E", label: "E \u00A0 to indicate the weight of certain foods" }
                ],
                answer: ["A", "E"]
            }
        ]
    },
    {
        title: "",
        instruction: "<b>Questions 25-30</b><br><br>What is the students' opinion about each of the following food trends?<br><br>Choose <b>SIX</b> answers from the box and write the correct letter, <b>A-H</b>, next to Questions 25-30.<br>" + opinionsHtml + "<b>Food trends</b>",
        questions: [
            { id: "q25", type: "gap_fill_flex", preText: "<b>25</b> \u00A0 Use of local products", postText: "", answer: ["D"], short: true },
            { id: "q26", type: "gap_fill_flex", preText: "<b>26</b> \u00A0 Reduction in unnecessary packaging", postText: "", answer: ["G"], short: true },
            { id: "q27", type: "gap_fill_flex", preText: "<b>27</b> \u00A0 Gluten-free and lactose-free food", postText: "", answer: ["C"], short: true },
            { id: "q28", type: "gap_fill_flex", preText: "<b>28</b> \u00A0 Use of branded products related to celebrity chefs", postText: "", answer: ["B"], short: true },
            { id: "q29", type: "gap_fill_flex", preText: "<b>29</b> \u00A0 Development of 'ghost kitchens' for takeaway food", postText: "", answer: ["F"], short: true },
            { id: "q30", type: "gap_fill_flex", preText: "<b>30</b> \u00A0 Use of mushrooms for common health concerns", postText: "", answer: ["H"], short: true }
        ]
    },
    {
        title: "PART 4 \u00A0 \u00A0 Questions 31-40",
        instruction: "Complete the notes below.<br><br>Write <b>ONE WORD ONLY</b> for each answer.",
        boxStyle: true,
        subHeader: "<h3 class='section-title' style='margin-top:0;'>Céide Fields</h3><div style='margin-bottom:1.5rem; padding-left:1.5rem; text-indent:-1rem;'>&bull; \u00A0 an important Neolithic archaeological site in the northwest of Ireland</div>",
        questions: [
            { id: "text_discovery", type: "text", text: "<strong>Discovery</strong>" },
            { id: "q31", type: "gap_fill", preText: "<span style='margin-left:1rem'>&bull;</span> \u00A0 In the 1930s, a local teacher realised that stones beneath the bog surface were once 31", postText: "", answer: ["walls"] },
            { id: "q32", type: "gap_fill", preText: "<span style='margin-left:1rem'>&bull;</span> \u00A0 His 32", postText: "became an archaeologist and undertook an investigation of the site:", answer: ["son"] },
            { id: "q33", type: "gap_fill", preText: "<span style='margin-left:2.5rem'>-</span> \u00A0 a traditional method used by local people to dig for 33", postText: "was used to identify where stones were located", answer: ["fuel"] },
            { id: "text_carbon", type: "text", text: "<div style='margin-left:2.5rem; margin-top:0.5rem;'>- \u00A0 carbon dating later proved the site was Neolithic.</div>" },
            { id: "q34", type: "gap_fill", preText: "<span style='margin-left:1rem'>&bull;</span> \u00A0 Items are well preserved in the bog because of a lack of 34", postText: "", answer: ["oxygen"] },
            
            { id: "text_farmers", type: "text", text: "<br><strong>Neolithic farmers</strong>" },
            { id: "q35", type: "gap_fill", preText: "<span style='margin-left:1rem'>&bull;</span> \u00A0 Houses were 35", postText: "in shape and had a hole in the roof.", answer: ["rectangular"] },
            { id: "text_innovations", type: "text", text: "<div style='margin-left:1rem; margin-top:0.5rem;'>&bull; \u00A0 Neolithic innovations include:</div><div style='margin-left:2.5rem; margin-top:0.5rem;'>- \u00A0 cooking indoors</div>" },
            { id: "q36", type: "gap_fill", preText: "<span style='margin-left:2.5rem'>-</span> \u00A0 pots used for storage and to make 36", postText: "", answer: ["lamps"] },
            { id: "q37", type: "gap_fill", preText: "<span style='margin-left:1rem'>&bull;</span> \u00A0 Each field at Céide was large enough to support a big 37", postText: "", answer: ["family"] },
            { id: "q38", type: "gap_fill", preText: "<span style='margin-left:1rem'>&bull;</span> \u00A0 The fields were probably used to restrict the grazing of animals &ndash; no evidence of structures to house them during 38", postText: "", answer: ["winter"] },
            
            { id: "text_decline", type: "text", text: "<br><strong>Reasons for the decline in farming</strong>" },
            { id: "q39", type: "gap_fill", preText: "<span style='margin-left:1rem'>&bull;</span> \u00A0 a decline in 39", postText: "quality", answer: ["soil"] },
            { id: "q40", type: "gap_fill", preText: "<span style='margin-left:1rem'>&bull;</span> \u00A0 an increase in 40", postText: "", answer: ["rain"] }
        ]
    }
    ],
    test2: [
        {
            title: "PART 1 \u00A0 \u00A0 Questions 1-10",
            instruction: "Complete the notes below.<br><br>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.",
            boxStyle: false,
            questions: [
                { id: "t2q1_text1", type: "text", text: "Local councils can arrange practical support to help those caring for elderly people at home.<br>This can give the carer:" },
                { id: "t2q1_text2", type: "text", text: "<div style='margin-left:1.5rem; margin-top:0.5rem;'>&bull; \u00A0 time for other responsibilities</div>" },
                { id: "t2q1", type: "gap_fill", preText: "<div style='margin-left:1.5rem;'>&bull; \u00A0 a 1", postText: "</div>", answer: ["break"] },
                
                { id: "t2q2_text1", type: "text", text: "<h3 class='section-title' style='margin-bottom:0.5rem; margin-top:1.5rem;'>Assessment of mother's needs</h3>This may include discussion of:" },
                { id: "t2q2", type: "gap_fill", preText: "<div style='margin-left:1.5rem; margin-top:0.5rem;'>&bull; \u00A0 how much 2", postText: "the caring involves</div>", answer: ["time"] },
                { id: "t2q3_text1", type: "text", text: "<div style='margin-left:1.5rem;'>&bull; \u00A0 what types of tasks are involved, e.g.</div><div style='margin-left:3rem; margin-top:0.5rem;'>\u25E6 \u00A0 help with dressing</div>" },
                { id: "t2q3", type: "gap_fill", preText: "<div style='margin-left:3rem;'>\u25E6 \u00A0 helping her have a 3", postText: "</div>", answer: ["shower"] },
                { id: "t2q4_text1", type: "text", text: "<div style='margin-left:3rem;'>\u25E6 \u00A0 shopping<br>\u25E6 \u00A0 helping with meals</div>" },
                { id: "t2q4", type: "gap_fill", preText: "<div style='margin-left:3rem;'>\u25E6 \u00A0 dealing with 4", postText: "</div>", answer: ["money"] },
                
                { id: "t2q5_text1", type: "text", text: "<div style='margin-left:1.5rem;'>&bull; \u00A0 any aspects of caring that are especially difficult, e.g.</div>" },
                { id: "t2q5", type: "gap_fill", preText: "<div style='margin-left:3rem; margin-top:0.5rem;'>\u25E6 \u00A0 loss of 5", postText: "</div>", answer: ["memory"] },
                { id: "t2q6", type: "gap_fill", preText: "<div style='margin-left:3rem;'>\u25E6 \u00A0 6", postText: "her</div>", answer: ["lifting"] },
                { id: "t2q7", type: "gap_fill", preText: "<div style='margin-left:3rem;'>\u25E6 \u00A0 preventing a 7", postText: "</div>", answer: ["fall", "falls"] },
                
                { id: "t2q8_text1", type: "text", text: "<h3 class='section-title' style='margin-bottom:0.5rem; margin-top:1.5rem;'>Types of support that may be offered to carers</h3>" },
                { id: "t2q8", type: "gap_fill", preText: "<div style='margin-left:1.5rem; margin-top:0.5rem;'>&bull; \u00A0 transport costs, e.g. cost of a 8", postText: "</div>", answer: ["taxi"] },
                { id: "t2q9", type: "gap_fill", preText: "<div style='margin-left:1.5rem;'>&bull; \u00A0 car-related costs, e.g. fuel and 9", postText: "</div>", answer: ["insurance"] },
                { id: "t2q10_text1", type: "text", text: "<div style='margin-left:1.5rem;'>&bull; \u00A0 help with housework</div>" },
                { id: "t2q10", type: "gap_fill", preText: "<div style='margin-left:1.5rem;'>&bull; \u00A0 help to reduce 10", postText: "</div>", answer: ["stress"] }
            ]
        },
        {
            title: "PART 2 \u00A0 \u00A0 Questions 11-20",
            instruction: "<b>Questions 11-16</b><br><br>What is the role of the volunteers in each of the following activities?<br><br>Choose <b>SIX</b> answers from the box and write the correct letter, <b>A-I</b>, next to Questions 11-16.",
            subHeader: `<div style="border: 1px solid #000; padding: 1.5rem; margin-bottom: 2rem; display: inline-block;">
                <div style="margin-bottom:0.8rem;"><b>A.</b> providing entertainment</div>
                <div style="margin-bottom:0.8rem;"><b>B.</b> providing publicity about a council service</div>
                <div style="margin-bottom:0.8rem;"><b>C.</b> contacting local businesses</div>
                <div style="margin-bottom:0.8rem;"><b>D.</b> giving advice to visitors</div>
                <div style="margin-bottom:0.8rem;"><b>E.</b> collecting feedback on events</div>
                <div style="margin-bottom:0.8rem;"><b>F.</b> selling tickets</div>
                <div style="margin-bottom:0.8rem;"><b>G.</b> introducing guest speakers at an event</div>
                <div style="margin-bottom:0.8rem;"><b>H.</b> encouraging cooperation between local organisations</div>
                <div><b>I.</b> helping people find their seats</div>
            </div>`,
            questions: [
                { id: "t2q11", type: "gap_fill_flex", preText: "<b>11</b> \u00A0 walking around the town centre", postText: "", answer: ["D"], short: true },
                { id: "t2q12", type: "gap_fill_flex", preText: "<b>12</b> \u00A0 helping at concerts", postText: "", answer: ["I"], short: true },
                { id: "t2q13", type: "gap_fill_flex", preText: "<b>13</b> \u00A0 getting involved with community groups", postText: "", answer: ["H"], short: true },
                { id: "t2q14", type: "gap_fill_flex", preText: "<b>14</b> \u00A0 helping with a magazine", postText: "", answer: ["E"], short: true },
                { id: "t2q15", type: "gap_fill_flex", preText: "<b>15</b> \u00A0 participating at lunches for retired people", postText: "", answer: ["A"], short: true },
                { id: "t2q16", type: "gap_fill_flex", preText: "<b>16</b> \u00A0 helping with the website", postText: "", answer: ["B"], short: true }
            ]
        },
        {
            title: "",
            instruction: "<b>Questions 17-20</b><br><br>Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.",
            questions: [
                {
                    id: "t2q17", type: "multiple_choice",
                    text: "<b>17</b> \u00A0 Which event requires the largest number of volunteers?",
                    options: [
                        { value: "A", label: "<b>A</b> \u00A0 the music festival" },
                        { value: "B", label: "<b>B</b> \u00A0 the science festival" },
                        { value: "C", label: "<b>C</b> \u00A0 the book festival" }
                    ],
                    answer: ["B"]
                },
                {
                    id: "t2q18", type: "multiple_choice",
                    text: "<b>18</b> \u00A0 What is the most important requirement for volunteers at the festivals?",
                    options: [
                        { value: "A", label: "<b>A</b> \u00A0 interpersonal skills" },
                        { value: "B", label: "<b>B</b> \u00A0 personal interest in the event" },
                        { value: "C", label: "<b>C</b> \u00A0 flexibility" }
                    ],
                    answer: ["A"]
                },
                {
                    id: "t2q19", type: "multiple_choice",
                    text: "<b>19</b> \u00A0 New volunteers will start working in the week beginning:",
                    options: [
                        { value: "A", label: "<b>A</b> \u00A0 2 September." },
                        { value: "B", label: "<b>B</b> \u00A0 9 September." },
                        { value: "C", label: "<b>C</b> \u00A0 23 September." }
                    ],
                    answer: ["B"]
                },
                {
                    id: "t2q20", type: "multiple_choice",
                    text: "<b>20</b> \u00A0 What is the next annual event for volunteers?",
                    options: [
                        { value: "A", label: "<b>A</b> \u00A0 a boat trip" },
                        { value: "B", label: "<b>B</b> \u00A0 a barbecue" },
                        { value: "C", label: "<b>C</b> \u00A0 a party" }
                    ],
                    answer: ["A"]
                }
            ]
        },
        {
            title: "PART 3 \u00A0 \u00A0 Questions 21-30",
            instruction: "<b>Questions 21-25</b><br><br>What is Rosie and Colin's opinion about each of the following aspects of human geography?<br><br>Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A-G</b>, next to Questions 21-25.",
            subHeader: `<div style="border: 1px solid #000; padding: 1.5rem; margin-bottom: 2rem; display: inline-block;">
                <div style="margin-bottom:0.8rem;"><b>A.</b> The information given about this was too vague.</div>
                <div style="margin-bottom:0.8rem;"><b>B.</b> This may not be relevant to their course.</div>
                <div style="margin-bottom:0.8rem;"><b>C.</b> This will involve only a small number of statistics.</div>
                <div style="margin-bottom:0.8rem;"><b>D.</b> It will be easy to find facts about this.</div>
                <div style="margin-bottom:0.8rem;"><b>E.</b> The facts about this may not be reliable.</div>
                <div style="margin-bottom:0.8rem;"><b>F.</b> No useful research has been done on this.</div>
                <div><b>G.</b> The information provided about this was interesting.</div>
            </div>`,
            questions: [
                { id: "t2q21_text", type: "text", text: "<b>Aspects of human geography</b>" },
                { id: "t2q21", type: "gap_fill_flex", preText: "<b>21</b> \u00A0 Population", postText: "", answer: ["D"], short: true },
                { id: "t2q22", type: "gap_fill_flex", preText: "<b>22</b> \u00A0 Health", postText: "", answer: ["G"], short: true },
                { id: "t2q23", type: "gap_fill_flex", preText: "<b>23</b> \u00A0 Economies", postText: "", answer: ["B"], short: true },
                { id: "t2q24", type: "gap_fill_flex", preText: "<b>24</b> \u00A0 Culture", postText: "", answer: ["A"], short: true },
                { id: "t2q25", type: "gap_fill_flex", preText: "<b>25</b> \u00A0 Poverty", postText: "", answer: ["E"], short: true }
            ]
        },
        {
            title: "",
            instruction: "<b>Questions 26-30</b><br><br>Choose the correct letter, <b>A</b>, <b>B</b> or <b>C</b>.",
            questions: [
                {
                    id: "t2q26", type: "multiple_choice",
                    text: "<b>26</b> \u00A0 Rosie says that in her own city the main problem is:",
                    options: [
                        { value: "A", label: "<b>A</b> \u00A0 crime." },
                        { value: "B", label: "<b>B</b> \u00A0 housing." },
                        { value: "C", label: "<b>C</b> \u00A0 unemployment." }
                    ],
                    answer: ["C"]
                },
                {
                    id: "t2q27", type: "multiple_choice",
                    text: "<b>27</b> \u00A0 What recent additions to the outskirts of their cities are both students happy about?",
                    options: [
                        { value: "A", label: "<b>A</b> \u00A0 conference centres" },
                        { value: "B", label: "<b>B</b> \u00A0 sports centres" },
                        { value: "C", label: "<b>C</b> \u00A0 retail centres" }
                    ],
                    answer: ["A"]
                },
                {
                    id: "t2q28", type: "multiple_choice",
                    text: "<b>28</b> \u00A0 The students agree that developing disused industrial sites may:",
                    options: [
                        { value: "A", label: "<b>A</b> \u00A0 have unexpected costs." },
                        { value: "B", label: "<b>B</b> \u00A0 damage the urban environment." },
                        { value: "C", label: "<b>C</b> \u00A0 destroy valuable historical buildings." }
                    ],
                    answer: ["A"]
                },
                {
                    id: "t2q29", type: "multiple_choice",
                    text: "<b>29</b> \u00A0 The students will mention Masdar City as an example of an attempt to achieve:",
                    options: [
                        { value: "A", label: "<b>A</b> \u00A0 daily collections for waste recycling." },
                        { value: "B", label: "<b>B</b> \u00A0 sustainable energy use." },
                        { value: "C", label: "<b>C</b> \u00A0 free transport for everyone." }
                    ],
                    answer: ["B"]
                },
                {
                    id: "t2q30", type: "multiple_choice",
                    text: "<b>30</b> \u00A0 When discussing the ecotown of Greenhill Abbots, Colin is uncertain about:",
                    options: [
                        { value: "A", label: "<b>A</b> \u00A0 what its objectives were." },
                        { value: "B", label: "<b>B</b> \u00A0 why there was opposition to it." },
                        { value: "C", label: "<b>C</b> \u00A0 how much of it has actually been built." }
                    ],
                    answer: ["C"]
                }
            ]
        },
        {
            title: "PART 4 \u00A0 \u00A0 Questions 31-40",
            instruction: "Complete the notes below.<br><br>Write <b>ONE WORD ONLY</b> for each answer.",
            boxStyle: true,
            questions: [
                { id: "t2q31_text", type: "text", text: "<strong>Developing food trends</strong>" },
                { id: "t2q31", type: "gap_fill", preText: "<span style='margin-left:1rem'>&bull;</span> \u00A0 The growth in interest in food fashions started with 31", postText: "of food being shared on social media.", answer: ["photos"] },
                { id: "t2q32_text", type: "text", text: "<div style='margin-left:1rem; margin-top:0.5rem;'>&bull; \u00A0 The UK food industry is constantly developing products which are new or different.</div><div style='margin-left:1rem; margin-top:0.5rem;'>&bull; \u00A0 Influencers on social media become 'ambassadors' for a brand.</div>" },
                { id: "t2q32", type: "gap_fill", preText: "<span style='margin-left:1rem'>&bull;</span> \u00A0 Sales of 32", postText: "food brands have grown rapidly this way.", answer: ["vegan"] },
                { id: "t2q33_text", type: "text", text: "<div style='margin-left:1rem; margin-top:0.5rem;'>&bull; \u00A0 Supermarkets track demand for ingredients on social media.</div>" },
                { id: "t2q33", type: "gap_fill", preText: "<span style='margin-left:1rem'>&bull;</span> \u00A0 Famous 33", postText: "are influential.", answer: ["chefs"] },
                
                { id: "t2q34_text", type: "text", text: "<br><strong>Marketing campaigns</strong><div style='margin-left:1rem; margin-top:0.5rem;'>&bull; \u00A0 The avocado:</div>" },
                { id: "t2q34", type: "gap_fill", preText: "<span style='margin-left:2.5rem'>\u25E6</span> \u00A0 34", postText: "were invited to visit growers in South Africa.", answer: ["journalists"] },
                { id: "t2q35", type: "gap_fill", preText: "<span style='margin-left:2.5rem'>\u25E6</span> \u00A0 Advertising focused on its 35", postText: "benefits.", answer: ["health"] },
                { id: "t2q36_text", type: "text", text: "<div style='margin-left:1rem; margin-top:0.5rem;'>&bull; \u00A0 Oat milk:</div><div style='margin-left:2.5rem; margin-top:0.5rem;'>\u25E6 \u00A0 A Swedish brand's media campaign received publicity by upsetting competitors.</div>" },
                { id: "t2q36", type: "gap_fill", preText: "<span style='margin-left:2.5rem'>\u25E6</span> \u00A0 Promotion in the USA through 36", postText: "shops reduced the need for advertising.", answer: ["coffee"] },
                { id: "t2q37", type: "gap_fill", preText: "<span style='margin-left:2.5rem'>\u25E6</span> \u00A0 It appealed to consumers who are concerned about the 37", postText: ".", answer: ["environment"] },
                { id: "t2q38_text", type: "text", text: "<div style='margin-left:1rem; margin-top:0.5rem;'>&bull; \u00A0 Norwegian skrei:</div>" },
                { id: "t2q38", type: "gap_fill", preText: "<span style='margin-left:2.5rem'>\u25E6</span> \u00A0 has helped strengthen the 38", postText: "of Norwegian seafood.", answer: ["reputation"] },
                
                { id: "t2q39_text", type: "text", text: "<br><strong>Ethical concerns</strong><div style='margin-left:1rem; margin-top:0.5rem;'>&bull; \u00A0 Quinoa:</div>" },
                { id: "t2q39", type: "gap_fill", preText: "<span style='margin-left:2.5rem'>\u25E6</span> \u00A0 Its success led to an increase in its 39", postText: ".", answer: ["price"] },
                { id: "t2q40", type: "gap_fill", preText: "<span style='margin-left:2.5rem'>\u25E6</span> \u00A0 Overuse of resources resulted in poor quality 40", postText: ".", answer: ["soil"] }
            ]
        }
    ]
};

let currentTestId = 'test1';


let totalQuestions = 0;
let answeredCorrectly = 0;

document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('test-selector');
    if (selector) {
        selector.addEventListener('change', (e) => {
            currentTestId = e.target.value;
            document.getElementById('test-title').textContent = currentTestId === 'test1' ? 'Practice test 1' : 'Practice test 2';
            document.getElementById('score-display').textContent = '';
            renderTest();
        });
    }

    renderTest();
    setupEventListeners();
});

function renderTest() {
    const container = document.getElementById('test-container');
    container.innerHTML = '';
    totalQuestions = 0;

    tests[currentTestId].forEach((part) => {
        const partEl = document.createElement('div');
        
        if (part.title) {
            const headerEl = document.createElement('div');
            headerEl.className = 'part-header';
            headerEl.innerHTML = `<span class="part-title">${part.title}</span>`;
            partEl.appendChild(headerEl);
        }

        const instrEl = document.createElement('div');
        instrEl.className = 'part-instruction';
        instrEl.innerHTML = part.instruction;
        partEl.appendChild(instrEl);

        const questionsContainer = document.createElement('div');
        if (part.boxStyle) {
            questionsContainer.style.border = "1px solid #000";
            questionsContainer.style.padding = "2rem";
            questionsContainer.style.marginTop = "1rem";
        }

        if (part.subHeader) {
            const sub = document.createElement('div');
            sub.innerHTML = part.subHeader;
            if (part.boxStyle) {
                questionsContainer.appendChild(sub);
            } else {
                partEl.appendChild(sub);
            }
        }

        part.questions.forEach(q => {
            const qEl = document.createElement('div');
            qEl.className = 'question-item';
            qEl.id = q.id ? `container-${q.id}` : '';

            if (q.type === 'text') {
                qEl.innerHTML = `<div class="q-text">${q.text}</div>`;
            } else if (q.type === 'gap_fill' || q.type === 'gap_fill_flex') {
                totalQuestions++;
                const isShort = q.short ? 'short-gap' : '';
                const inputHtml = `<input type="text" id="${q.id}" class="gap-input ${isShort}" autocomplete="off" />`;
                const correctionHtml = `<span class="correction-text" id="correction-${q.id}"></span>`;
                
                if (q.type === 'gap_fill') {
                    qEl.innerHTML = `<div class="q-text">${q.preText} ${inputHtml} ${q.postText} ${correctionHtml}</div>`;
                } else {
                    qEl.innerHTML = `<div class="q-text flex-between"><span>${q.preText}</span> <div>${inputHtml}${correctionHtml}</div></div>`;
                }
            } else if (q.type === 'multiple_choice' || q.type === 'multiple_choice_multi') {
                totalQuestions += (q.type === 'multiple_choice_multi' ? q.answer.length : 1);
                const inputType = q.type === 'multiple_choice' ? 'radio' : 'checkbox';
                
                let optionsHtml = q.options.map(opt => `
                    <label class="option-label">
                        <input type="${inputType}" name="${q.id}" value="${opt.value}" />
                        <span>${opt.label}</span>
                    </label>
                `).join('');

                qEl.innerHTML = `
                    <div class="q-text">${q.text} <span class="correction-text" id="correction-${q.id}"></span></div>
                    <div class="q-options">${optionsHtml}</div>
                `;
            }
            questionsContainer.appendChild(qEl);
        });

        partEl.appendChild(questionsContainer);
        container.appendChild(partEl);
    });
}

function setupEventListeners() {
    document.getElementById('btn-check').addEventListener('click', checkAnswers);
    document.getElementById('btn-retry').addEventListener('click', retryIncorrect);
}

function checkAnswers() {
    answeredCorrectly = 0;
    
    tests[currentTestId].forEach(part => {
        part.questions.forEach(q => {
            if (q.type === 'text') return;
            
            const container = document.getElementById(`container-${q.id}`);
            const correctionEl = document.getElementById(`correction-${q.id}`);
            container.classList.remove('status-correct', 'status-incorrect');
            correctionEl.style.display = 'none';

            let isCorrect = false;

            if (q.type === 'gap_fill' || q.type === 'gap_fill_flex') {
                const input = document.getElementById(q.id);
                const val = input.value.trim().toLowerCase();
                
                isCorrect = val && q.answer.map(a => a.toLowerCase()).includes(val);
                
                if (isCorrect) {
                    container.classList.add('status-correct');
                    answeredCorrectly++;
                } else {
                    container.classList.add('status-incorrect');
                    correctionEl.textContent = '(' + q.answer[0] + ')';
                    correctionEl.style.display = 'inline';
                }
            } 
            else if (q.type === 'multiple_choice') {
                const selected = document.querySelector(`input[name="${q.id}"]:checked`);
                
                isCorrect = selected && selected.value === q.answer[0];
                
                if (isCorrect) {
                    container.classList.add('status-correct');
                    answeredCorrectly++;
                } else {
                    container.classList.add('status-incorrect');
                    correctionEl.textContent = '(Answer: ' + q.answer[0] + ')';
                    correctionEl.style.display = 'inline';
                }
            } 
            else if (q.type === 'multiple_choice_multi') {
                const selectedNodes = document.querySelectorAll(`input[name="${q.id}"]:checked`);
                const selectedValues = Array.from(selectedNodes).map(n => n.value);
                
                let correctCountInSelection = 0;
                selectedValues.forEach(val => {
                    if (q.answer.includes(val)) {
                        correctCountInSelection++;
                    }
                });

                const sortedSelected = [...selectedValues].sort().join(',');
                const sortedAnswer = [...q.answer].sort().join(',');
                
                isCorrect = (sortedSelected === sortedAnswer);
                answeredCorrectly += correctCountInSelection;

                if (isCorrect) {
                     container.classList.add('status-correct');
                } else {
                     container.classList.add('status-incorrect');
                     if (selectedValues.length > 0) {
                         correctionEl.textContent = '(Answers: ' + q.answer.join(', ') + ')';
                         correctionEl.style.display = 'inline';
                     }
                }
            }
        });
    });

    document.getElementById('score-display').textContent = `Score: ${answeredCorrectly} / ${totalQuestions}`;
}

function retryIncorrect() {
    tests[currentTestId].forEach(part => {
        part.questions.forEach(q => {
            if (q.type === 'text') return;
            const container = document.getElementById(`container-${q.id}`);
            const correctionEl = document.getElementById(`correction-${q.id}`);
            
            if (!container.classList.contains('status-correct')) {
                container.classList.remove('status-incorrect');
                correctionEl.style.display = 'none';
                
                if (q.type === 'gap_fill' || q.type === 'gap_fill_flex') {
                    document.getElementById(q.id).value = '';
                } else {
                    document.querySelectorAll(`input[name="${q.id}"]`).forEach(i => i.checked = false);
                }
            }
        });
    });
    
    document.getElementById('score-display').textContent = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
