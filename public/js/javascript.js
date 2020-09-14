class View {
  constructor() {
      this.mainBlock = document.querySelector("#add");
      this.divList = document.createElement("div");
      this.input = document.createElement("input");
      this.addButton = document.createElement("button");
      this.taskList = document.createElement("ul");
  }

  init() {
      this.divList.append(this.input, this.addButton);
      this.input.placeholder = 'Enter the city ...';
      this.divList.className = 'list';
      this.mainBlock.append(this.divList,this.taskList);
      this.addButton.innerHTML = "Add!";
  }
  renderTask(data) {
        const item = document.createElement("li");
        const divText = document.createElement('div');
        divText.className = 'text';
        const nameCity = document.createElement('span');
        nameCity.textContent = `${data.name}`;
        nameCity.className = 'nameCity';
        divText.appendChild(nameCity);
        const nameCuntry = document.createElement('span');
        nameCuntry.textContent = `, ${data.sys.country}`;
        divText.appendChild(nameCuntry);
        item.appendChild(divText);
        const icon = document.createElement('div');
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        item.appendChild(icon);
        const tem = document.createElement('div');
        tem.innerHTML = `${Math.round(data.main.temp - 273)} C &deg;`;
        item.appendChild(tem);
        const divDescription = document.createElement('div');
        divDescription.className = 'description';
        item.appendChild(divDescription);
        const description = document.createElement('p');
        description.textContent = data.weather[0]['description'];
        divDescription.appendChild(description);   
        const wind = document.createElement('p');
        wind.innerHTML = `wind: ${data.wind.speed} mph`;
        divDescription.appendChild(wind);
        const humidity = document.createElement('p');
        humidity.innerHTML = `humidity: ${data.main.humidity} %`;
        divDescription.appendChild(humidity); 

        const btnClean = document.createElement('button');
        btnClean.innerHTML = '&#9746';
        btnClean.classList.add('removeButton');
        item.appendChild(btnClean);
        const btnChange = document.createElement('button');
        btnChange.innerHTML = '&#9998';
        btnChange.classList.add('btnChange');
        item.appendChild(btnChange);
        this.taskList.appendChild(item);  
    }
  renderNewLi(data,newCityLi){
      const divText = document.createElement('div');
      divText.className = 'text';
      const nameCity = document.createElement('span');
      nameCity.textContent = `${data.name}`;
      nameCity.className = 'nameCity';
      divText.appendChild(nameCity);
      const nameCuntry = document.createElement('span');
      nameCuntry.textContent = `, ${data.sys.country}`;
      divText.appendChild(nameCuntry);
      newCityLi.appendChild(divText);
      const icon = document.createElement('div');
      icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
      newCityLi.appendChild(icon);
      const tem = document.createElement('div');
      tem.innerHTML = `${Math.round(data.main.temp - 273)} C &deg;`;
      newCityLi.appendChild(tem);
      const divDescription = document.createElement('div');
      divDescription.className = 'description';
      newCityLi.appendChild(divDescription);
      const description = document.createElement('p');
      description.textContent = data.weather[0]['description'];
      divDescription.appendChild(description);   
      const wind = document.createElement('p');
      wind.innerHTML = `wind: ${data.wind.speed} mph`;
      divDescription.appendChild(wind);
      const humidity = document.createElement('p');
      humidity.innerHTML = `humidity: ${data.main.humidity} %`;
      divDescription.appendChild(humidity); 
  
      const btnClean = document.createElement('button');
      btnClean.innerHTML = '&#9746';
      btnClean.classList.add('removeButton');
      newCityLi.appendChild(btnClean);
      const btnChange = document.createElement('button');
      btnChange.innerHTML = '&#9998';
      btnChange.classList.add('btnChange');
      newCityLi.appendChild(btnChange);
  }
}
class AddFormView {
  constructor() {
      this.divSave = document.createElement("div");
      this.saveButton = document.createElement("button");
      this.input = document.createElement("input");
  }
  init(li) {
      this.divSave.append(this.input, this.saveButton);
      li.append(this.divSave);
      this.saveButton.innerHTML = "SAVE";
  }
  cleen(){
    this.divSave.remove();
  }
  
}
class AddCityWeatherView {
  constructor() {
      this.status = document.querySelector("#status");
      this.city = document.querySelector("#city");
  }
  
  renderCityWeather(data) {
      const text = document.createElement('h3');
      text.textContent = `YOUR CITY`;
      this.city.appendChild(text);

      const content = document.createElement('div');
      content.className = 'content';
      this.city.appendChild(content);
      const icon = document.createElement('div');
      icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
      content.appendChild(icon);
      const tem = document.createElement('div');
      tem.innerHTML = `${Math.round(data.main.temp - 273)} C &deg;`;
      content.appendChild(tem);

      const divCity = document.createElement('div');
      divCity.textContent = `${data.name}`;
      divCity.className = 'divCity';
      this.city.appendChild(divCity);

      const description = document.createElement('span');
      description.textContent = data.weather[0]['description'];
      divCity.appendChild(description);

  }
}
class AddCoursView {
  constructor() {
      this.divCourse = document.querySelector("#course");
  }
  renderCourse(course) {
  
     const divVal = document.createElement('div');
     const divBuy = document.createElement('div');
     const divSale = document.createElement('div');

     const spanVal = document.createElement('span');
     spanVal.innerText = 'Валюта';
     divVal.appendChild(spanVal);
     const spanBuy = document.createElement('span');
     spanBuy.innerText = 'Купить';
     divBuy.appendChild(spanBuy);
     const spanSale = document.createElement('span');
     spanSale.innerText = 'Продать';
     divSale.appendChild(spanSale);

   course.forEach((elem) =>{
      if(elem['base_ccy'] === 'UAH'){
        const text = document.createElement('h4');
        text.innerText = elem['ccy'];
        divVal.appendChild(text);
        const inputBuy = document.createElement('p');
        inputBuy.innerText = elem['buy'];
        divBuy.appendChild(inputBuy);

        const inputSale = document.createElement('p');
        inputSale.innerText = elem['sale'];
        divSale.appendChild(inputSale);
      }    
     this.divCourse.append(divVal,divBuy,divSale);
   }); 
  }
  cleen(){
        this.divCourse.innerText = "";
    }
}

class Controller {
  constructor(model, view, addFormView, addCityWeatherView, addCoursView) {
      this.model = model;
      this.view = view;
      this.addFormView = addFormView;
      this.addCityWeatherView = addCityWeatherView;
      this.addCoursView = addCoursView;
      this.addData =  this.addData.bind(this);
      this.removeData = this.removeData.bind(this);
      this.chageData = this.chageData.bind(this);
      this.saveData = this.saveData.bind(this);
      this.success = this.success.bind(this);
      this.error = this.error.bind(this);
  }

  addData() {
        var value = this.view.input.value;
        this.view.input.value = '';
        if(value !== ""){        
          this.model.getToLocalStorage();
          let arr = this.model.task; 
          if(arr === null){
            this.model.task = [];
            let index = 0;
            this.model.makeRequest(value,index);
          }else{
           
            let index = this.model.task.length;
            this.model.makeRequest(value,index);
          }

          this.removeHandle();
          this.changeHandler();
        }
  }

  testLocalStorage(){
    if(localStorage.cityId === undefined || localStorage.cityId.join === undefined){ 
        this.model.getIdObjToArr();
    }
  }
  testMongobd(){
      this.model.getData();
      this.removeHandle();
      this.changeHandler();
  }
  
  addHandler() {
      this.view.addButton.addEventListener("click", this.addData);
  }

  removeHandle(){
      this.view.taskList.addEventListener("click", this.removeData); 
  }
  indexTask(li){
      let index = 0;
        while(li.previousElementSibling !== null) {
            li = li.previousElementSibling;
            index++;
        }
      return index;
  }
  removeData(event) {
        if(event.target.className === 'removeButton'){
          let li = event.target.parentElement 
          let index = this.indexTask(li);
          
          this.model.task.forEach((elem,idx) => {
            if(index === idx){
              this.model.deleteCity(elem);
            }
          });
          
          this.model.removeTask(index);
          this.model.setToLocalStorage();
          li.remove();
        }  
  } 
  changeHandler() {
        this.view.taskList.addEventListener("click", this.chageData);
  }
  chageData(event){
        if(event.target.className === 'btnChange'){
           let li = event.target.parentElement;
           let span = li.childNodes[0].firstChild.innerHTML;
           let index = this.indexTask(li);
           this.addFormView.init(li);
           this.addFormView.input.value = span;   
           this.saveHandler();   
        }
  }  
  saveHandler() {
        this.addFormView.saveButton.addEventListener("click",this.saveData);
  }    
  saveData(event){
        let newCityLi = event.target.closest('li');
        let index = this.indexTask(newCityLi);  
        let newCityName = this.addFormView.input.value;
        if(newCityName !== ""){
          this.model.makeRequestSave(newCityName,newCityLi,index);
        }
        this.addFormView.cleen();
  }  
  success(position) { 
          const latitude  = position.coords.latitude;
          const longitude = position.coords.longitude;

          this.addCityWeatherView.status.textContent = '';
          this.model.makeRequestGeoCity(latitude,longitude);
  }
  testGeolocation(){
        if (!navigator.geolocation) {
          this.addCityWeatherView.status.textContent = 'Geolocation не поддерживается вашим браузером';
        } else {
          this.addCityWeatherView.status.textContent = 'Определение местоположения…';
          navigator.geolocation.getCurrentPosition(this.success, this.error);
        }
  }
  error() {
        this.addCityWeatherView.status.textContent = 'Невозможно получить ваше местоположение';
    }
  getCours(){
        let interval = 1000 * 60 * 60;

        this.model.makeRequestCourse();
        setInterval(() => this.addCoursView.cleen(), interval);
        setInterval(() => this.model.makeRequestCourse(), interval);
  }
}

class Model {
  constructor(view, addCityWeatherView, addCoursView) {
        this.task = [];
        this.view = view;
        this.addCityWeatherView = addCityWeatherView;
        this.addCoursView = addCoursView;
  }

  addTask(value) {
      return this.task.push(value);
  }
  setToLocalStorage(){
      return localStorage.setItem('cityId', JSON.stringify(this.task));
  }   
  getToLocalStorage(){
      return this.task = JSON.parse(localStorage.getItem('cityId'));
  }
  removeTask(index) {
      this.task.splice(index, 1);
  }
  changeTask(index,newCityName) {
      if (newCityName !== ""){
        this.task.splice(index, 1,newCityName);
      }
  }
  
  makeRequest(value,index){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value + '&appid=2c671e475a698b55f4c2f033a089a4a5')  
.then((response) => {  
    if (response.status !== 200) {  
      console.log('Looks like there was a problem. Status Code: ' + response.status);  
    }else{
     return response.json()
    }
    })
    .then(data => {
      if (data !== undefined){
          this.createCity(data.name,index);
          this.view.renderTask(data);
          this.getIdObjTest(index);
        }else{
          console.log("City has not found! Try another city!");
          console.log('Не верно введено название города');
        } 
    })
    .catch((e) => {
          console.log('Error: ' + e.message);
          console.log(e.response);
      }); 
  }
  createCity(value,index){
      try{
        $.ajax({
          url: "/cities",
          contentType: "application/json",
          method: "POST",
          data: JSON.stringify({
            cityName: value,
          }),
          
        });
      }catch(e){
        console.log('Error: ' + e.message);
        console.log(e.response);
      }
    
  }
  deleteCity(id){
    try{
      $.ajax({
        url: "/cities/"+id,
        contentType: "application/json",
        method: "DELETE",
        
      });
    }catch(e){
      console.log('Error: ' + e.message);
      console.log(e.response);
    }
  }
  putCity(value,id){
    try{ 
      $.ajax({
        url: "/cities/"+id,
        contentType: "application/json",
        method: "PUT",
        data: JSON.stringify({
          cityName: value,
        })
        
      });
    }catch(e){
      console.log('Error: ' + e.message);
      console.log(e.response);
    }
  }
  
  getData(){
    fetch('/cities/all').then((response) => {  
    if (response.status !== 200) {  
      console.log('Looks like there was a problem. Status Code: ' + 
        response.status);  
    }else{
     return response.json()
    }
    })
    .then(data =>{
      if(data.length !== 0){
        this.makeRequestMongobd(data);
      }else{
        console.log('Нет данных в БД');
      }   
    })
    .catch((e) => {
      console.log('Error: ' + e.message);
      console.log(e.response);
  }); 
  }

  getIdObjTest(index){
    fetch('/cities').then((response) => {  
    if (response.status !== 200) {  
      console.log('Looks like there was a problem. Status Code: ' + 
        response.status);  
    }else{
     return response.json()
    }
    })
    .then(data =>{
      
      if(data.length !== 0) {
        data.forEach((elem,idx) => {
          if(idx === index){
            this.addTask(elem._id);
            this.setToLocalStorage();
          }
        });
      }else{
       
        this.getIdObj(index);
      }   
      
    })
    .catch((e) => {
      console.log('Error: ' + e.message);
      console.log(e.response);
  }); 
  }
  getIdObj(index){
    fetch('/cities').then((response) => {  
    if (response.status !== 200) {  
      console.log('Looks like there was a problem. Status Code: ' + 
        response.status);  
    }else{
     return response.json()
    }
    })
    .then(data =>{
      data.forEach((elem,idx) => {
        if(idx === index){
          this.addTask(elem._id);
          this.setToLocalStorage();
        }
        
      });
    })
    .catch((e) => {
      console.log('Error: ' + e.message);
      console.log(e.response);
  }); 
  }
  getIdObjToArr(){
    fetch('/cities').then((response) => {  
    if (response.status !== 200) {  
      console.log('Looks like there was a problem. Status Code: ' + 
        response.status);  
    }else{
     return response.json()
    }
    })
    .then(data =>{
      data.forEach((elem) => {
          this.addTask(elem._id);
          this.setToLocalStorage();
        
      });
    })
    .catch((e) => {
      console.log('Error: ' + e.message);
      console.log(e.response);
  }); 
  }
  async makeRequestMongobd(value){
      try {
        const arr = await value;
        
        for(var i = 0; i < arr.length; i++){
          const city = await arr[i].cityName;
          const data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=2c671e475a698b55f4c2f033a089a4a5');
          const result = await data.json();
          if (result !== undefined){
           await this.view.renderTask(result);
          }else{
            await console.log('Не верно введено название города');
          } 
          
        }
        
      }catch(e){
        console.log('Error: ' + e.message);
        console.log(e.response);
      }
  }
  makeRequestSave(newCityName,newCityLi,index){
      fetch('https://api.openweathermap.org/data/2.5/weather?q=' + newCityName + '&appid=2c671e475a698b55f4c2f033a089a4a5')  
  .then((response) => {  
      if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' + 
          response.status);  
      }else{
       return response.json()
      }
      })
      .then(data => {
        if (data !== undefined){
          this.task.forEach((elem,idx) => {
            if(index === idx){
              this.putCity(data.name,elem);
            }
          });
          newCityLi.innerHTML = "";
          this.view.renderNewLi(data,newCityLi); 
        }else{
          console.log("City has not found! Try another city!");
          console.log('Не верно введено название города');
        }       
      })
      .catch((e) => {
            console.log('Error: ' + e.message);
            console.log(e.response);
        }); 
  }   
  makeRequestGeoCity(latitude,longitude){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2c671e475a698b55f4c2f033a089a4a5`)  
    .then((response) => {  
      if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' + 
          response.status);  
      }else{
       return response.json()
      }
      })
     .then(data => {
        this.addCityWeatherView.renderCityWeather(data);
      })
     .catch((e) => {
         console.log('Error: ' + e.message);
         console.log(e.response);
      }); 
  }
  makeRequestCourse() {
      fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)  
      .then((response) => {  
        if (response.status !== 200) {  
          console.log('Looks like there was a problem. Status Code: ' + 
            response.status);  
        }else{
         return response.json()
        }
        })
       .then(data => {
          this.addCoursView.renderCourse(data);
        })
       .catch((e) => {
           console.log('Error: ' + e.message);
           console.log(e.response);
        });
  }
}

(function init() {
  const view = new View();
  const addCityWeatherView = new AddCityWeatherView();
  const addFormView = new AddFormView();
  const addCoursView = new AddCoursView();
  const model = new Model(view,addCityWeatherView,addCoursView);
  const controller = new Controller(model, view, addFormView, addCityWeatherView,addCoursView);
  view.init();
  controller.testLocalStorage();
  controller.addHandler();  
  controller.testGeolocation();
  controller.testMongobd();
  controller.getCours();
})();
