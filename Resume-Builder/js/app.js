// Achievement Div and Btns
let achievementDiv = document.querySelector("#achievement-form");
let achievementRepeaterBtn = document.querySelector(
  "#achievements-wrapper  .repeater-add"
);
// Experience Div and Btns
let experienceDiv = document.querySelector("#experience-form");
let experienceRepeaterBtn = document.querySelector(
  "#experience-wrapper  .repeater-add"
);
// Education Div and Btns
let educationDiv = document.querySelector("#education-form");
let educationRepeaterBtn = document.querySelector(
  "#education-wrapper .repeater-add"
);
// Project Div and Btns
let projectDiv = document.querySelector("#project-form");
let projectRepeaterBtn = document.querySelector(
  "#project-wrapper .repeater-add"
);
// Skill Div and Btns
let skillDiv = document.querySelector("#skill-form");
let skillRepeaterBtn = document.querySelector("#skill-wrapper .repeater-add");

// Global function for Removing Item
const removeItem = (div) => {
  div.remove();
};

// Achievement Dynamic Add
achievementRepeaterBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let form = document.createElement("div");
  form.innerHTML = `
    <section class="border mt-4 py-8 px-2 relative" id="achievements">
                <div class="flex gap-4 flex-wrap items-center justify-center w-full">
                    <div class="title w-full md:w-[49%]">
                        <label for="title" class="text-sm font-medium mb-1">Title</label>
                        <input onkeyup="generateCV()" type="text" id="firstname" class="border py-1 pl-3 text-sm w-full achievement-title"
                        placeholder="Your Acheivement">
                    </div>
                    <div class="description w-full md:w-[49%]">
                        <label for="title" class="block text-sm font-medium mb-1">Description</label>
                        <input onkeyup="generateCV()" type="text" id="firstname" class="border py-1 pl-3 text-sm w-full achievement-description"
                        placeholder="About Acheivement">
                    </div>
                </div>
                <button class="repeater-remove bg-red-600 text-white py-[1px] px-2 rounded-2xl absolute top-0 right-0">-</button> 
            </section>
    `;
  achievementDiv.append(form);
  let removeBtn = form.querySelector(".repeater-remove");
  removeBtn.addEventListener("click", () => {
    removeItem(form);
  });
});

// Experience Form Dynamic Add
experienceRepeaterBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let form = document.createElement("div");
  form.innerHTML = `
  <section class="experience border mt-4 py-8 px-2">
  <div class="flex gap-4 flex-wrap items-center justify-center w-full">
      <div class="title w-full md:w-[32.5%]">
          <label for="experienceTitle" class="text-sm font-medium mb-1">Title</label>
          <input onkeyup="generateCV()" type="text" id="experienceTitle"
              class="border py-1 pl-3 text-sm w-full experience-title" placeholder="e.g. Frontend Developer">
          <span class="form-text text-[#ca0b00] text-xs tracking-wide"></span>
      </div>
      <div class="company w-full md:w-[32%]">
          <label for="experienceCompany" class="block text-sm font-medium mb-1">Company / Organization</label>
          <input onkeyup="generateCV()" type="text" id="experienceCompany"
              class="border py-1 pl-3 text-sm w-full experience-company" placeholder="e.g. Airbnb">
          <div class="form-text text-[#ca0b00] text-xs tracking-wide"></div>
      </div>
      <div class="location w-full md:w-[32%]">
          <label for="experienceLocation" class="block text-sm font-medium mb-1">Location</label>
          <input onkeyup="generateCV()" type="text" id="experienceLocation"
              class="border py-1 pl-3 text-sm w-full experience-location" placeholder="e.g. San Francisco">
          <span class="form-text text-[#ca0b00] text-xs tracking-wide"></span>
      </div>
  </div>
  <div class="flex gap-4 flex-wrap items-center justify-center w-full mt-6">
      <div class="start-date w-full md:w-[32.5%]">
          <label for="startDate" class="text-sm font-medium mb-1">Start Date</label>
          <input onkeyup="generateCV()" type="date" id="startDate"
              class="border py-1 pl-3 text-sm w-full experience-startdate">
          <span class="form-text text-[#ca0b00] text-xs tracking-wide"></span>
      </div>
      <div class="end-date w-full md:w-[32%]">
          <label for="endDate" class="block text-sm font-medium mb-1">End Date</label>
          <input onkeyup="generateCV()" type="date" id="endDate"
              class="border py-1 pl-3 text-sm w-full experience-enddate" placeholder="e.g. Computer Science">
          <span class="form-text text-[#ca0b00] text-xs tracking-wide"></span>
      </div>
      <div class="description w-full md:w-[32%]">
          <label for="experienceDescription" class="block text-sm font-medium mb-1">Description</label>
          <input onkeyup="generateCV()" type="text" id="experienceDescription"
              class="border py-1 pl-3 text-sm w-full experience-description">
          <span class="form-text text-[#ca0b00] text-xs tracking-wide"></span>
      </div>
  </div>
  <button class="repeater-remove bg-red-600 text-white py-[1px] px-2 rounded-2xl absolute top-0 right-0">-</button> 
  </section>
    `;
  experienceDiv.append(form);
  let removeBtn = form.querySelector(".repeater-remove");
  removeBtn.addEventListener("click", () => {
    removeItem(form);
  });
});

// Education Form Dynamic Add
educationRepeaterBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let form = document.createElement("div");
  form.innerHTML = `
  <section class="education border mt-4 py-8 px-2">
                        <div class="flex gap-4 flex-wrap items-center justify-center w-full">
                            <div class="title w-full md:w-[32.5%]">
                                <label for="school" class="text-sm font-medium mb-1">School</label>
                                <input onkeyup="generateCV()" type="text" id="school"
                                    class="border py-1 pl-3 text-sm w-full education-school"
                                    placeholder="e.g. Stanford ">
                                <span class="form-text text-[#ca0b00] text-xs tracking-wide"></span>
                            </div>
                            <div class="description w-full md:w-[32%]">
                                <label for="degree" class="block text-sm font-medium mb-1">Degree</label>
                                <input onkeyup="generateCV()" type="text" id="degree"
                                    class="border py-1 pl-3 text-sm w-full education-degree"
                                    placeholder="e.g. Computer Science">
                                <span class="form-text text-[#ca0b00] text-xs tracking-wide"></span>
                            </div>
                            <div class="city w-full md:w-[32%]">
                                <label for="city" class="block text-sm font-medium mb-1">City</label>
                                <input onkeyup="generateCV()" type="text" id="city"
                                    class="border py-1 pl-3 text-sm w-full education-city" placeholder="e.g. Las Vegas">
                                <span class="form-text text-[#ca0b00] text-xs tracking-wide"></span>
                            </div>
                        </div>
                        <div class="flex gap-4 flex-wrap items-center justify-center w-full mt-6">
                            <div class="start-date w-full md:w-[32.5%]">
                                <label for="date" class="text-sm font-medium mb-1">Start Date</label>
                                <input onkeyup="generateCV()" type="date" id="date"
                                    class="border py-1 pl-3 text-sm w-full education-startdate">
                                <span class="form-text text-[#ca0b00] text-xs tracking-wide"></span>
                            </div>
                            <div class="end-date w-full md:w-[32%]">
                                <label for="end-date" class="block text-sm font-medium mb-1">End Date</label>
                                <input onkeyup="generateCV()" type="date" id="end-date"
                                    class="border py-1 pl-3 text-sm w-full education-enddate"
                                    placeholder="e.g. Computer Science">
                                <span class="form-text text-[#ca0b00] text-xs tracking-wide"></span>
                            </div>
                            <div class="description w-full md:w-[32%]">
                                <label for="educationD" class="block text-sm font-medium mb-1">Description</label>
                                <input onkeyup="generateCV()" type="text" id="educationD"
                                    class="border py-1 pl-3 text-sm w-full education-description">
                            </div>
                        </div>
                        <button class="repeater-remove bg-red-600 text-white py-[1px] px-2 rounded-2xl absolute top-0 right-0">-</button>
                        </section>
    `;
  educationDiv.append(form);
  let removeBtn = form.querySelector(".repeater-remove");
  removeBtn.addEventListener("click", () => {
    removeItem(form);
  });
});

// Project Form Dynamic Add
projectRepeaterBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let form = document.createElement("div");
  form.innerHTML = `
  <section class="projects border mt-4 py-8 px-2 relative">
                        <div class="flex gap-4 flex-wrap items-center justify-center w-full">
                            <div class="title w-full md:w-[32.5%]">
                                <label for="projectName" class="text-sm font-medium mb-1">Project Name</label>
                                <input onkeyup="generateCV()" type="text" id="projectName"
                                    class="border py-1 pl-3 text-sm w-full project-name" placeholder="e.g. Netflix Clone">
                                <span class="form-text text-[#ca0b00] text-xs tracking-wide"></span>
                            </div>
                            <div class="link w-full md:w-[32%]">
                                <label for="projectLink" class="block text-sm font-medium mb-1">Project link</label>
                                <input onkeyup="generateCV()" type="text" id="projectLink"
                                    class="border py-1 pl-3 text-sm w-full project-link" placeholder="e.g. www.netflix.vercel.app">
                                <span class="form-text text-[#ca0b00] text-xs tracking-wide"></span>
                            </div>
                            <div class="description w-full md:w-[32%]">
                                <label for="projectDescription" class="block text-sm font-medium mb-1">Description</label>
                                <input onkeyup="generateCV()" type="text" id="projectDescription"
                                    class="border py-1 pl-3 text-sm w-full project-description" placeholder="e.g. How you Build">
                                <span class="form-text text-[#ca0b00] text-xs tracking-wide"></span>
                            </div>
                        </div>
                        <button class="repeater-remove bg-red-600 text-white py-[1px] px-2 rounded-2xl absolute top-0 right-0">-</button>
                        </section>
    `;
  projectDiv.append(form);
  let removeBtn = form.querySelector(".repeater-remove");
  removeBtn.addEventListener("click", () => {
    removeItem(form);
  });
});

// Skill Form Dynamic Add
skillRepeaterBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let form = document.createElement("div");
  form.innerHTML = `
    <section class="skill border mt-4 py-8 px-2 relative">
                    <div class="flex gap-4 flex-wrap items-center justify-center w-full">
                        <div class="title w-full">
                            <label for="skill" class="text-sm font-medium mb-1">Skill</label>
                            <input onkeyup="generateCV()" type="text" id="skill" class="border py-1 pl-3 text-sm w-full skills" placeholder="e.g. JavaScript">
                        </div>
                    </div>
                    <button class="repeater-remove bg-red-600 text-white py-[1px] px-2 rounded-2xl absolute top-0 right-0">-</button>
                </section>
    `;
  skillDiv.append(form);
  let removeBtn = form.querySelector(".repeater-remove");
  removeBtn.addEventListener("click", () => {
    removeItem(form);
  });
});
