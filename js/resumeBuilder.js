/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Catherine Chanse",
    "role": "Frontend Developer",
    "contacts": {
        "mobile": "415-432-0357",
        "email": "cchanse@gmail.com",
        "github": "https://github.com/cchanse",
        "twitter": "@cchanse",
        "location": "XYZ Sacramento Street",
    },
    "welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP"
    ],
    "biopic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/1e9/1b3/30445ad.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);

        $("#header").prepend(formattedbioPic);

        // $("#header").prepend(formattedMobile);
        // $("#header").prepend(formattedEmail);
        // $("#header").prepend(formattedGithub);
        // $("#header").prepend(formattedTwitter);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedMsg);

        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedTwitter);

        $("#header").append(HTMLskillsStart);


        if (bio.skills.length > 0) {
            for (var skill in bio.skills) {

                if (bio.skills.hasOwnProperty(skill)) {
                    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                    $("#skills").append(formattedSkill);
                }
            }
        }
    }
};


var education = {
    "schools": [{
            "name": "Brown University",
            "location": "Providence, Rhode Island",
            "degree": "BA",
            "majors": ["Sociology"],
            "dates": "1998",
            "url": "http://brown.edu"
        }, {
            "name": "California State University, East Bay",
            "location": "Hayward, CA",
            "degree": "Masters",
            "majors": ["Multimedia"],
            "dates": "2008",
            "url": "www.brown.edu"
        }

    ],
    "onlineCourses": [ //onlineCourses: array with - but should this be array containing objects?
        {
            "title": "Frontend Developer",
            "school": "Udacity",
            "date": "2016",
            "url": "udacity.com"
        }
    ],
    "display": function() {

        //identify the length of the school array and then go through and replace and append
        for (var school in education.schools) {

            if (education.schools.hasOwnProperty(school)) {

                $("#education").append(HTMLschoolStart);
                // console.log(education.schools[school].name);
                var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
                var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
                var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
                // var formattedschoolUrl = HTMLschoolUrl.replace("%data%", education.schools[school].url);

                $(".education-entry:last").append(formattedschoolName);
                $(".education-entry:last").append(formattedschoolLocation);
                $(".education-entry:last").append(formattedschoolDegree);
                $(".education-entry:last").append(formattedschoolMajor);
                $(".education-entry:last").append(formattedschoolDates);
                // $(".education-entry:last").append(formattedschoolUrl);
            }

        }

    }
};

var work = {
    "jobs": [{
            "employer": "Federal Reserve Bank of SF",
            "title": "Frontend Developer",
            "location": "San Francisco, CA",
            "dates": "2012-2014",
            "description": "Front-end development for the Federal Reserve Bank of San Francisco's public website"

        }, {
            "employer": "Bay Area Video Coalition",
            "title": "Instructor",
            "location": "San Francisco, CA",
            "dates": "2009-2012",
            "description": "Develop curricula and teach classes for digital media professionals, educators, artists and media makers, independent producers, vocational rehabilitation clients and job seekers. "
        }


    ],
    "display": function() {
        for (var job in work.jobs) {

            if (work.jobs.hasOwnProperty(job)) {

                //create new div for work experience
                $("#workExperience").append(HTMLworkStart);

                //concat employer and title
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                $(".work-entry:last").append(formattedEmployerTitle);

                var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
                $(".work-entry:last").append(formattedLocation);


                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                $(".work-entry:last").append(formattedDates);

                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                $(".work-entry:last").append(formattedDescription);
            }
        }

    }
};

var projects = {
    "projects": [{
        "title": "Super Stars Literacy",
        "dates": "2014",
        "description": "Redesign through Taproot Project",
        "images": [
            "images/super-stars-literacy.jpg"
        ]
    }, {
        "title": "CRA Tool",
        "dates": "2014",
        "description": "Used Angular to filter information",
        "images": [
            "images/cra-tool.jpg"
        ]
    }],
    "display": function() {
        for (var project in projects.projects) {

            if (projects.projects.hasOwnProperty(project)) {

                $("#projects").append(HTMLprojectStart);

                var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

                var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);

                var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

                $(".project-entry:last").append(formattedTitle);
                $(".project-entry:last").append(formattedDates);
                $(".project-entry:last").append(formattedDescription);



                if (projects.projects[project].images.length > 0) {
                    for (var image in projects.projects[project].images) {
                        if (projects.projects[project].images.hasOwnProperty(image)) {
                            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                            $(".project-entry:last").append(formattedImage);
                        }
                    }
                }
            }
        }
    }
};



bio.display();
education.display();
work.display();
projects.display();

//line to add Google map to project
$("#mapDiv").append(googleMap);