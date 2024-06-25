import '../css/main.css';
import $ from 'jquery';
import _ from 'lodash';
import logo from '../assets/holberton-logo.jpg';

$('body').append('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

$('#logo').css({
    'background-image': `url(${logo})`,
    'background-size': '200px 200px',
    'width': '200px',
    'height': '200px'
  });

let conunt = 0;

function updateCounter() {
  conunt++;
  $("#count").html(`${conunt} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter, 500));