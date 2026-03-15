
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
            // Remove active style from sidebar
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('sidebar-active', 'text-white'));
            document.querySelectorAll('.nav-link').forEach(l => l.classList.add('text-gray-600'));

            // Show current page
            document.getElementById(pageId).classList.add('active');
            
            // Highlight current sidebar link
            const links = document.querySelectorAll('.nav-link');
            links.forEach(link => {
                if (link.textContent.toLowerCase().includes(pageId.split('-')[0])) {
                    link.classList.add('sidebar-active', 'text-white');
                    link.classList.remove('text-gray-600');
                }
            });

            // Scroll to top
            window.scrollTo(0,0);
        }
       

function showPage(pageId) {

    const pages = document.querySelectorAll(".page-content");
    pages.forEach(page=>{
        page.classList.remove("active");
    });

    const activePage = document.getElementById(pageId);
    if(activePage){
        activePage.classList.add("active");
    }

    const links = document.querySelectorAll(".nav-link");

    links.forEach(link=>{
        link.classList.remove("sidebar-active");
        link.classList.remove("text-white");
        link.classList.add("text-gray-600");
    });

    links.forEach(link=>{
        if(link.innerText.toLowerCase().includes(pageId.split("-")[0])){
            link.classList.add("sidebar-active");
            link.classList.add("text-white");
            link.classList.remove("text-gray-600");
        }
    });

    window.scrollTo(0,0);
}

document.querySelectorAll("button").forEach(btn=>{

    if(btn.innerText.includes("Book Appointment") || 
       btn.innerText.includes("Book Appt") ||
       btn.innerText.includes("Book Visit") ||
       btn.innerText.includes("Book New Appointment"))
    {

        btn.addEventListener("click",function(){
            alert("Appointment booking feature will be available soon.");
        });

    }

});

document.querySelectorAll("button").forEach(btn=>{

    if(btn.innerText.includes("Request"))
    {
        btn.addEventListener("click",function(){
            alert("Blood request sent successfully.");
        });
    }

});

document.querySelectorAll("button").forEach(btn=>{

    if(btn.innerText.includes("Donate Now"))
    {
        btn.addEventListener("click",function(){
            alert("Thank you for volunteering to donate blood.");
        });
    }

});

document.querySelectorAll("button").forEach(btn=>{

    if(btn.innerText === "Search")
    {
        btn.addEventListener("click",function(){
            alert("Search functionality will connect to database later.");
        });
    }

});

const fileButton = document.querySelector("#ai-analyzer button");

if(fileButton){

    fileButton.addEventListener("click",()=>{

        const input = document.createElement("input");
        input.type = "file";
        input.accept=".pdf,.png,.jpg";

        input.click();

        input.addEventListener("change",function(){

            if(input.files.length>0){
                alert("File uploaded: " + input.files[0].name);
            }

        });

    });

}

const dropArea = document.querySelector("#ai-analyzer .border-dashed");

if(dropArea){

dropArea.addEventListener("dragover",(e)=>{
    e.preventDefault();
    dropArea.classList.add("border-blue-500");
});

dropArea.addEventListener("dragleave",()=>{
    dropArea.classList.remove("border-blue-500");
});

dropArea.addEventListener("drop",(e)=>{
    e.preventDefault();
    dropArea.classList.remove("border-blue-500");

    const files = e.dataTransfer.files;

    if(files.length>0){
        alert("File dropped: "+files[0].name);
    }

});

}

document.querySelectorAll("button").forEach(btn=>{

    if(btn.innerText.includes("Save Changes"))
    {
        btn.addEventListener("click",function(){
            alert("Settings saved successfully.");
        });
    }

});

const markRead = document.querySelector("#notifications a");

if(markRead){

markRead.addEventListener("click",function(){

    document.querySelectorAll("#notifications .bg-blue-50")
    .forEach(n=>{
        n.classList.remove("bg-blue-50");
        n.classList.add("bg-white","border");
    });

    alert("All notifications marked as read.");

});

}

document.querySelectorAll("a").forEach(link=>{

    if(link.innerText.includes("Edit Profile"))
    {
        link.addEventListener("click",(e)=>{
            e.preventDefault();
            alert("Profile editing feature coming soon.");
        });
    }

});

document.querySelectorAll("a").forEach(link=>{

    if(link.innerText.includes("View Full Report"))
    {
        link.addEventListener("click",(e)=>{
            e.preventDefault();
            alert("Opening full medical report.");
        });
    }

});

document.addEventListener("DOMContentLoaded",()=>{

    showPage("dashboard");

});


const settingButtons = document.querySelectorAll("#settings .col-span-1 button");
const settingPanels = document.querySelectorAll("#settings .settings-panel");

settingButtons.forEach(btn=>{
    btn.addEventListener("click",function(){

        settingButtons.forEach(b=>{
            b.classList.remove("bg-blue-100","text-blue-700");
        });

        btn.classList.add("bg-blue-100","text-blue-700");

    });
});


const themeOptions = document.querySelectorAll("#settings .w-40");

themeOptions.forEach(option=>{

    option.addEventListener("click",function(){

        themeOptions.forEach(o=>{
            o.classList.remove("border-blue-500");
        });

        option.classList.add("border-blue-500");

        const theme = option.innerText.trim();

        if(theme === "Dark"){
            document.body.classList.add("bg-gray-900","text-white");
            localStorage.setItem("theme","dark");
        }

        if(theme === "Light"){
            document.body.classList.remove("bg-gray-900","text-white");
            localStorage.setItem("theme","light");
        }

        if(theme === "System"){
            document.body.classList.remove("bg-gray-900","text-white");
            localStorage.setItem("theme","system");
        }

    });

});




const toggles = document.querySelectorAll("#settings input[type='checkbox']");

toggles.forEach(toggle=>{

    toggle.addEventListener("change",function(){

        const settingName = toggle.parentElement.previousElementSibling.querySelector("h3").innerText;

        localStorage.setItem(settingName, toggle.checked);

    });

});




const saveBtn = document.querySelector("#settings button.bg-blue-600");

if(saveBtn){

saveBtn.addEventListener("click",function(){

    const inputs = document.querySelectorAll("#settings input");

    inputs.forEach(input=>{

        if(input.type !== "checkbox"){
            localStorage.setItem(input.previousElementSibling.innerText, input.value);
        }

    });

    alert("Settings saved successfully");

});

}




const cancelBtn = document.querySelector("#settings button.bg-gray-200");

if(cancelBtn){

cancelBtn.addEventListener("click",function(){

    if(confirm("Discard changes?")){
        location.reload();
    }

});

}


document.addEventListener("DOMContentLoaded",function(){

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark"){
        document.body.classList.add("bg-gray-900","text-white");
    }

    const toggles = document.querySelectorAll("#settings input[type='checkbox']");

    toggles.forEach(toggle=>{

        const settingName = toggle.parentElement.previousElementSibling.querySelector("h3").innerText;

        const saved = localStorage.getItem(settingName);

        if(saved !== null){
            toggle.checked = saved === "true";
        }

    });

});
let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

const bookBtn = document.querySelector("#appointments button.bg-blue-600");

if(bookBtn){

bookBtn.addEventListener("click",function(){

    const doctor = prompt("Enter Doctor Name:");
    const hospital = prompt("Enter Hospital Name:");
    const date = prompt("Enter Appointment Date (YYYY-MM-DD):");
    const time = prompt("Enter Time (HH:MM)");

    if(doctor && hospital && date && time){

        const appointment = {
            doctor: doctor,
            hospital: hospital,
            date: date,
            time: time,
            status: "Upcoming"
        };

        appointments.push(appointment);

        localStorage.setItem("appointments",JSON.stringify(appointments));

        alert("Appointment Booked Successfully!");

        renderAppointments();

    }

});

}
document.addEventListener("click",function(e){

if(e.target.innerText === "Cancel"){

    if(confirm("Cancel this appointment?")){

        const card = e.target.closest(".bg-white");

        card.remove();

        alert("Appointment Cancelled");

    }

}

});
document.addEventListener("click",function(e){

if(e.target.innerText === "Reschedule"){

    const newDate = prompt("Enter New Date:");
    const newTime = prompt("Enter New Time:");

    if(newDate && newTime){

        const card = e.target.closest(".bg-white");

        card.querySelectorAll(".text-sm.text-gray-600")[0].innerHTML = newDate;
        card.querySelectorAll(".text-sm.text-gray-600")[1].innerHTML = newTime;

        alert("Appointment Rescheduled");

    }

}

});

document.addEventListener("click",function(e){

if(e.target.innerText === "Book Again"){

    const card = e.target.closest(".bg-white");

    const doctor = card.querySelector("h3").innerText;

    alert("Booking another appointment with " + doctor);

}

});

document.addEventListener("click",function(e){

if(e.target.innerText === "View Summary"){

    const card = e.target.closest(".bg-white");

    const doctor = card.querySelector("h3").innerText;

    alert("Summary for appointment with " + doctor);

}

});

function renderAppointments(){

    const container = document.querySelector("#appointments");

    if(!container) return;

    appointments.forEach(app=>{

        const card = document.createElement("div");

        card.className = "bg-white rounded-xl shadow p-6 mb-4 flex justify-between items-center";

        card.innerHTML = `
        <div>
        <h3 class="font-semibold">${app.doctor}</h3>
        <p class="text-gray-500 text-sm">${app.hospital}</p>
        </div>

        <div class="text-sm text-gray-600">
        ${app.date}
        </div>

        <div class="text-sm text-gray-600">
        ${app.time}
        </div>

        <div class="flex gap-2">
        <button class="border px-3 py-1 rounded">Reschedule</button>
        <button class="border border-red-400 text-red-500 px-3 py-1 rounded">Cancel</button>
        </div>
        `;

        container.appendChild(card);

    });

}


document.addEventListener("DOMContentLoaded",function(){

    renderAppointments();

});


const browseBtn = document.querySelector("#ai-analyzer button");
// const dropArea = document.querySelector("#ai-analyzer .border-dashed");
const recentContainer = document.querySelector("#ai-analyzer .border");

browseBtn.addEventListener("click", () => {

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".pdf,.png,.jpg,.jpeg";

    fileInput.click();

    fileInput.addEventListener("change", () => {
        if(fileInput.files.length > 0){
            analyzeReport(fileInput.files[0]);
        }
    });

});


dropArea.addEventListener("dragover", (e)=>{
    e.preventDefault();
    dropArea.classList.add("border-blue-500");
});

dropArea.addEventListener("dragleave", ()=>{
    dropArea.classList.remove("border-blue-500");
});

dropArea.addEventListener("drop", (e)=>{

    e.preventDefault();
    dropArea.classList.remove("border-blue-500");

    const file = e.dataTransfer.files[0];

    if(file){
        analyzeReport(file);
    }

});

function analyzeReport(file){

    const results = [
        "Hemoglobin slightly low → Possible Mild Iron Deficiency",
        "White blood cells normal → No infection detected",
        "Cholesterol slightly elevated → Recommend diet control",
        "All parameters within normal range",
        "Vitamin D deficiency detected"
    ];

    const randomResult = results[Math.floor(Math.random()*results.length)];

    const now = new Date();
    const time = now.toLocaleString();

    const analysis = {
        name: file.name,
        time: time,
        result: randomResult
    };

    saveAnalysis(analysis);
    displayAnalysis(analysis);

    alert("AI analysis completed!");

}

function saveAnalysis(data){

    let history = JSON.parse(localStorage.getItem("analysisHistory")) || [];

    history.unshift(data);

    localStorage.setItem("analysisHistory", JSON.stringify(history));

}

function displayAnalysis(data){

    const container = document.querySelector("#ai-analyzer .space-y-4") || document.querySelector("#ai-analyzer .border").parentElement;

    const card = document.createElement("div");

    card.className = "border rounded-lg p-4 mb-4";

    card.innerHTML = `
    
    <div class="flex justify-between items-center">

        <div class="flex items-center gap-3">

            <div class="w-10 h-10 bg-gray-200 rounded"></div>

            <div>
                <p class="font-semibold text-gray-800">${data.name}</p>
                <p class="text-sm text-gray-500">${data.time}</p>
            </div>

        </div>

        <span class="bg-green-100 text-green-700 px-3 py-1 text-xs rounded">
        ANALYZED
        </span>

    </div>

    <div class="bg-blue-50 p-4 rounded mt-4 text-sm text-gray-700">

        <p class="font-semibold text-gray-500 mb-1">AI SUMMARY</p>

        ${data.result}

    </div>
    `;

    container.prepend(card);

}

document.addEventListener("DOMContentLoaded", ()=>{

    const history = JSON.parse(localStorage.getItem("analysisHistory")) || [];

    history.forEach(item=>{
        displayAnalysis(item);
    });

});

const searchBtn = document.querySelector("#find-doctors button");
const searchInput = document.querySelector("#find-doctors input[type='text']");
const doctorCards = document.querySelectorAll("#find-doctors .bg-white");

searchBtn.addEventListener("click", searchDoctors);

function searchDoctors(){

    const searchText = searchInput.value.toLowerCase().trim();

    let found = false;

    doctorCards.forEach(card => {

        const doctorName = card.querySelector("h3").innerText.toLowerCase();
        const doctorInfo = card.innerText.toLowerCase();

        if(doctorName.includes(searchText) || doctorInfo.includes(searchText)){

            card.style.display = "block";
            found = true;

        }else{

            card.style.display = "none";

        }

    });

    if(!found){
        alert("No doctor found for your search.");
    }

}

searchInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        searchDoctors();
    }

});

function resetSearch(){

    searchInput.value = "";

    doctorCards.forEach(card=>{
        card.style.display = "block";
    });

}