// Your solution goes here
// Hints:
// 1. Assign a id to the tags you want to select
// 2. Use appropriate methods and properties to complete the specified task.
// Example: 
// (style) property to change style
// (classList) property to modify class
// (getAttribute) and (setAttribute) to modify attributes


//img container 
var arif = document.querySelector('.img-container');
arif.style.setProperty('background-color', '#d2fc03', 'important');

//text-danger
var arifdanger = document.querySelectorAll('.text-danger');
arifdanger.forEach(function (element) {
    element.style.setProperty('color', '#d2fc03', 'important');
});

//img change
var arifpic= document.getElementById('iits-img');
arifpic.src = "arif.jpeg";

//copyright
var copyright = document.getElementById('iits-cr-msg');
copyright.textContent = 'Arif,Inc';




//personal information
document.getElementById('iits-name').textContent = 'Arifur Rahman ';
document.getElementById('iits-prof').textContent = 'graduation student';
document.getElementById('iits-edu').textContent = 'Computer Science and Engineering';
document.getElementById('iits-study').textContent = 'IUBAT';
document.getElementById('iits-school').textContent = 'Alirpara M.U high school';
document.getElementById('iits-passion').textContent = 'Web dvelopment';
document.getElementById('iits-numYears').textContent = 'almost 1 year';
document.getElementById('iits-hobby').textContent = 'Gardening,be a good cricketer and travelling';
document.getElementById('iits-crc').textContent = 'a good organizer from school life,its maybe class 8';
document.getElementById('iits-ability').textContent = 'to give me that ability to take proper decisions and my future goals';
document.getElementById('iits-goal').textContent = 'my passion and take the challanges';



//social media links
document.getElementById('iits-fb-link').href = 'https://www.facebook.com/profile.php?id=100013270692338&mibextid=ZbWKwL'; 
document.getElementById('iits-email').href = 'mailto:arifurr953@gmail.com'; 
document.getElementById('iits-github-link').href = 'https://github.com/ArifurRahman69'; 

//button
var button = document.getElementById('iits-btn');
button.classList.remove('btn-danger');
button.style.backgroundColor = '#d2fc03';
button.classList.add('btn - primary');
