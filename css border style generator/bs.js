const border_radius=document.querySelector('#border-radius');
const border_width=document.querySelector('#border-width');
const radius_unit=document.querySelector('.radius');
const width_unit=document.querySelector('.width');
const textarea=document.querySelector('#code-generator');
const border_style=document.querySelector('.border-style');
const border_color=document.querySelector('.border-color');

function update(){

radius_unit.textContent=`${border_radius.value<10?'0'+border_radius.value:border_radius.value}%`;
width_unit.textContent=`${border_width.value<10?'0'+border_width.value:border_width.value}px`;
textarea.textContent=`border-radius:${border_radius.value}%;
border:${border_width.value}px ${border_style.value} ${border_color.value};`;
document.querySelector('.container').style.cssText=textarea.textContent;

}

border_radius.addEventListener('mousemove',update);
border_radius.addEventListener('change',update);
border_width.addEventListener('mousemove',update);
border_width.addEventListener('change',update);
border_style.addEventListener('change',update);
border_color.addEventListener('change',update);


document.querySelector('.copy-button').addEventListener('click',()=>{
    textarea.select();
    document.execCommand('copy');
    alert('code copied');
});

/*
copycopycopycopycopyborder-radius:50%; border:2px solid yellow;

border-radius:50%; border:2px solid yellow;

copy-button
border-radius:50%; border:2px solid yellow;

border-radius:27%;
                            border:42px Dotted pink;border-radius:27%;
                            border:42px Dotted pink;
border-radius:27%;
                            border:42px Dotted pink;
                            border-radius:27%;
border:42px Dashed violet;
border-radius:27%;
border:42px Dashed violet;
border-radius:27%;
border:42px Dashed violet;
*/