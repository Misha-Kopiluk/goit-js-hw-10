import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as m,i as f}from"./assets/vendor-77e16229.js";const e=document.querySelector("button");e.setAttribute("disabled",!0);const a=document.querySelector("#datetime-picker"),b=document.querySelector(".value[data-days]"),S=document.querySelector(".value[data-hours]"),h=document.querySelector(".value[data-minutes]"),y=document.querySelector(".value[data-seconds]");let i;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const o=t[0];o<new Date?(e.setAttribute("disabled",!0),f.error({message:"Please choose a date in the future",messageColor:"#ffffff",backgroundColor:"#ef4040"})):e.removeAttribute("disabled"),i=o}};m("#datetime-picker",g);function n(t){const c=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:d,minutes:u,seconds:l}}function p(t){b.textContent=String(t.days).padStart(2,"0"),S.textContent=String(t.hours).padStart(2,"0"),h.textContent=String(t.minutes).padStart(2,"0"),y.textContent=String(t.seconds).padStart(2,"0")}function v(){const t=setInterval(()=>{let r=i-new Date;if(r<0){clearInterval(t),e.removeAttribute("disabled"),a.removeAttribute("disabled");return}const s=n(r);p(s),e.setAttribute("disabled",!0),a.setAttribute("disabled",!0)},1e3)}e.addEventListener("click",v);console.log(n(2e3));console.log(n(14e4));console.log(n(2414e4));
//# sourceMappingURL=commonHelpers.js.map
