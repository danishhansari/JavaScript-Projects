let mainForm = document.querySelector("#cv-form")

let firstNameElem = mainForm.querySelector("#firstname"),
    middleNameElem = mainForm.querySelector("#middlename"),
    lastNameElem = mainForm.querySelector("#lastname"),
    imgElem = mainForm.querySelector("#image"),
    designationElem = mainForm.querySelector("#designation"),
    addressElem = mainForm.querySelector("#address"),
    emailElem = mainForm.querySelector("#email"),
    phoneElem = mainForm.querySelector("#number"),
    summaryElem = mainForm.querySelector("#summary")

    
    // Display Information 
    let imgDsp = document.querySelector('.cv .left .img .dsp-img'),
    phoneDsp = document.querySelector('.cv .detail .dsp-phone span'),
    emailDsp = document.querySelector('.cv .detail .dsp-email span'),
    locationDsp = document.querySelector('.cv .detail .dsp-location span'),
    skillsDsp = document.querySelector('.cv .dsp-skills .skills-list'),
    educationDsp = document.querySelector('.cv .dsp-education .edu-list'),
    achievementDsp = document.querySelector('.cv .dsp-achievement .achievement-list'),
    nameDsp = document.querySelector('.cv .right .name .dsp-name'),
    designationDsp = document.querySelector('.cv .right .name .dsp-designation'),
    summaryDsp = document.querySelector('.cv .right .name .dsp-summary'),
    projectDsp = document.querySelector('.cv .right .dsp-projects .project-list'),
    experienceDsp = document.querySelector('.cv .right .dsp-experience .experience-list');

    const generateCV = () => {
        let userData = userInput()
        console.log(userData)
        displayCV(userData)
    }
    const showListData = (listData, listContainer) => {
        listContainer.innerHTML = ""
        listData.forEach(listItem => {
            let itemElem = document.createElement("div")
            itemElem.classList.add('preview-item')

            for(const key in listItem) {
                let subItemElem = document.createElement('span');
                subItemElem.classList.add('preview-item-val');
                subItemElem.innerHTML = `${listItem[key]}`
                itemElem.appendChild(subItemElem)
            }
            listContainer.appendChild(itemElem)
        });
    }
    const displayCV  = (userData) => {
        nameDsp.innerHTML = `
        ${userData.about.firstName} ${userData.about.middleName} ${userData.about.lastName}
        `;
        designationDsp.innerHTML = `
        ${userData.about.designation}
        `;
        summaryDsp.innerHTML = `
        ${userData.about.summary}
        `;
        validate(userData.about.email, emailRegex, "Email", emailElem);
        emailDsp.innerHTML = ` ${userData.about.email}`
        validate(userData.about.phoneNumber,phoneNumberRegex,"Phone Number", phoneElem)
        phoneDsp.innerHTML = ` ${userData.about.phoneNumber}`
        locationDsp.innerHTML = ` ${userData.about.address}`;
        showListData(userData.achievement,achievementDsp);
        showListData(userData.experience,experienceDsp)
        showListData(userData.education,educationDsp)
        showListData(userData.project,projectDsp)
        showListData(userData.skill, skillsDsp)
    }
const userInput = () => {
    // Achivement title Element
    const achievementTitleElem = document.querySelectorAll(".achievement-title"), 
    achievementDescriptionElem = document.querySelectorAll(".achievement-description");

    // Experience 
    const experienceTitle = document.querySelectorAll(".experience-title"), 
    experienceCompany = document.querySelectorAll(".experience-company"), 
    experienceLocation = document.querySelectorAll(".experience-location"),
    experienceStartdate = document.querySelectorAll(".experience-startdate"),
    experienceEnddate = document.querySelectorAll(".experience-enddate"),
    experienceDescription = document.querySelectorAll(".experience-description");

    // Education 
    const educationSchool = document.querySelectorAll(".education-school"), 
    educationDegree = document.querySelectorAll(".education-degree"),
    educationCity = document.querySelectorAll(".education-city"),
    educationStartdate  = document.querySelectorAll(".education-startdate"),
    educationEnddate = document.querySelectorAll(".education-enddate"),
    educationDescription = document.querySelectorAll(".education-description");

    // Project 
    const projectName = document.querySelectorAll('.project-name'), 
    projectLink = document.querySelectorAll('.project-link'),
    projectDescription = document.querySelectorAll('.project-description');

    // Skills
    const skillList = document.querySelectorAll('.skills');
    return {
        about: {firstName: firstNameElem.value,
                middleName: middleNameElem.value,
                lastName: lastNameElem.value,
                image: imgElem.value,
                designation: designationElem.value,
                address: addressElem.value,
                email: emailElem.value,
                phoneNumber: phoneElem.value,
                summary: summaryElem.value},
        achievement : fetchValues(['achievement-title', 'achievement-description'], achievementTitleElem, achievementDescriptionElem), 
        experience : fetchValues(['experience-title','experience-company','experience-location','experience-startdate','experience-enddate','experience-description'],experienceTitle, experienceCompany, experienceCompany, experienceLocation, experienceStartdate, experienceEnddate, experienceDescription),
        education: fetchValues(['education-school','education-degree','education-city','education-startdate','education-enddate','education-description'],educationSchool, educationDegree , educationCity, educationStartdate, educationEnddate, educationDescription),
        project: fetchValues(['project-name','project-link','project-description'], projectName, projectLink,projectDescription),
        skill: fetchValues(['skills'], skillList)
    }
} 
const fetchValues = (attrs, ...nodeLists) => {
    let elemsAttrsCount = nodeLists.length;
    let elemsDataCount = nodeLists[0].length;
    let tempDataArr = [];
    // first loop deals with the no of repeaters value
    for(let i = 0; i<elemsDataCount; i++){
        let dataObj = {}
        for (let j = 0; j<elemsAttrsCount; j++){
            dataObj[`${attrs[j]}`] = nodeLists[j][i].value;
        }
        tempDataArr.push(dataObj)
    }
    return tempDataArr;
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneNumberRegex = /^(\+?91|0)?[6789]\d{9}$/;
const validate = (element, regex, text, msgEle) => {
    let isvalide = regex.test(element);
    if(isvalide){
        msgEle.nextElementSibling.innerHTML = ""
    }else{
        msgEle.nextElementSibling.innerHTML = `${text} is invalid`
    }
}
const uploadImg = () => {
    imgDsp.src = URL.createObjectURL(imgElem.files[0])
}

const printCV = () => {
    window.print()
}