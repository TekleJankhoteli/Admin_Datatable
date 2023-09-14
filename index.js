let main=document.getElementById("main");
let header=document.createElement("div");
let title=document.createElement("p");
let title2 =document.createElement("p");
let email=document.createElement("p");
let street=document.createElement("p");

main.style.width="1400px";
main.style.display="flex";
main.style.flexDirection="column";
main.style.alignItems="center";


header.style.display="flex";
header.style.width="1100px";
header.style.alignItems="center";
header.style.justifyContent="center";
header.style.borderBottom="4px solid #DFDFDF";


title.innerHTML="Name";
title.style.width="300px";
title.style.fontWeight="bolder";
title.style.fontSize="20px";



title2.innerHTML="User Name";
title2.style.width="300px";
title2.style.fontWeight="bolder";
title2.style.fontSize="20px";



email.innerHTML="Email";
email.style.width="300px";
email.style.fontWeight="bolder";
email.style.fontSize="20px";


street.innerHTML="Street";
street.style.fontWeight="bolder";
street.style.fontSize="20px";


function fetchDataFunction() {
    fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    data.forEach(user => {
                        const adminRow = document.createElement("div");
                        adminRow.style.display="flex";
                        adminRow.innerHTML = `
                          
                        <div class="user-info" style="display: flex; width: 1400px; justify-content: center; align-items: center; align-content: center; justify-items: center;">
                         
                            <p style="width:300px;text-align:center;border-bottom:1px solid #DFDFDF; "> ${user.name}</p>
                            <p style="width:300px;text-align:center;border-bottom:1px solid #DFDFDF; padding-left:40px;"> ${user.username}</p>
                            <p style="width:250px;text-align:center;border-bottom:1px solid #DFDFDF;"> ${user.email}</p>
                            <p style="width:300px;text-align:center;border-bottom:1px solid #DFDFDF;padding-left:60px;"> ${user.address.street}</p>
                            <img style="padding-left:10px;"src="./assets/accc.png" alt="">
                            </div>
                           
                        `;
                       main.appendChild(adminRow);
                    });
                })
                .catch(error => console.error("Error fetching data:", error));
}

fetchDataFunction();

main.appendChild(header)
header.appendChild(title)
header.appendChild(title2)
header.appendChild(email)
header.appendChild(street)





