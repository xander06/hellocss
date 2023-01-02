
import React, { useState } from 'react';

const Age = () => {
const [birthday, setBirthday] = useState('');
const [age, setAge] = useState("-");
const [month, setMonth] = useState("-")
const [day, setDay] = useState("-")

const calculateAge = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth()+1;
    const currentDay = currentDate.getDate();

    // Split the birthday string into an array of [year, month, day]
    console.log(birthday)
    const birthdayArray = birthday.split('-');
    console.log(birthdayArray)
    
    const birthYear = parseInt(birthdayArray[0]);
    const birthMonth = parseInt(birthdayArray[1]);
    const birthDay = parseInt(birthdayArray[2]);

    let age = currentYear - birthYear;
    let month = currentMonth - birthMonth
    let day = currentDay - birthDay
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age -= 1;
    }
    setAge(age);
    setMonth(month)
    setDay(day)
}

    return (
        <>
            <div >
                <div class="age-calculate">
                    <input type="date" id="birth_date"  value={birthday} onChange={e => setBirthday (e.target.value)}/>
                    <button onClick={calculateAge} >Calcular</button>
                    <br></br>
                <div className="age-container">
                    <p className="age">{age} Años  </p>
                    <p className="age"> {month} Meses</p>
                    <p className="age">{day} Dias </p>
                </div>        
                </div>
            </div>
        </>
    );
}

export default Age