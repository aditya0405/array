
// kita akan buat components card dengan JS

// FUNTIONAL COMPONENTS 

// return (
//     <div></div>
// )  di react sperti ini

const Card =(id, title, body, img)=>{

    return  `   

        <div class="card" id="${id}">
            <span class="material-icons" id="create">create</span>
            <span class="material-icons" id="delete">delete</span>


            <h3 class="card_title">${title}</h3>
            <img src="${img}" />
            <p class="card_body">${body}</p>
        </div>

    `;
};

export default Card;