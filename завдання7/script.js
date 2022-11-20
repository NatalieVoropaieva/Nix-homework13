const button = document.getElementById('btn');
button.addEventListener("click" , () => alert ( "1" ));
button.removeEventListener("click" , () => alert ( "1" ));
button.onclick = () => alert ( 2 ); // виведе 1 і 2. тому що removeEventListener не зміг знайти функцію, так як вона не була задекларована