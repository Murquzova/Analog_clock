const f = () => {
    let now = new Date();
    let hour = now.getHours() * 30;
    let minute = now.getMinutes() * 6;
    let second = now.getSeconds() * 6;
    document.getElementById("hour").style.transform = `rotate(${
     hour+(minute/12) -90
    }deg)`;
    document.getElementById("minute").style.transform = `rotate(${
     minute -90
    }deg)`;
    document.getElementById("second").style.transform = `rotate(${
     second-90
    }deg)`;
  };
  f();
  setInterval(f, 1000);
  