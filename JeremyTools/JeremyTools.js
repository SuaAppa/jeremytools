class JellyCheckBoxOfJT extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        let text=this.getAttribute('text');
        this.attachShadow({mode : 'open'});
        this.shadowRoot.innerHTML = `
        <label class="checkbox">
        <input type="checkbox"/>
        <span class="icon"></span>
        <span class="text">${text}</span>
        </label>
        <style>
            .checkbox input {
                display:none;
            }
            .checkbox span {
                display:inline-block;
                vertical-align:middle;
                cursor:pointer;
            }
            .checkbox .icon{
                position:relative;
                width : 17px;
                height : 17px;
                border : 1px solid #c8ccd4;
                border-radius: 3px;
                transition:background 0.1s ease;
            }
            .checkbox .icon::after{
                content:'';
                position:absolute;
                top:1px;
                left:5px;
                width:5px;
                height:11px;
                border-right: 2px solid #fff;
                border-bottom: 2px solid #fff;
                transform: rotate(45deg) scale(0);
                transition: all 0.3s ease;
                transition-delay: 0.15s;
                opacity:0;
            }
            .checkbox .text{
                margin-left:5px;
            }
            .checkbox input:checked ~ .icon {
                border-color:transparent;
                background:#ff1616;
                animation:jelly 0.6s ease;
            }

            @keyframes jelly {
                from {transform : scale(1,1);}
                30% {transform:scale(1.25,0.75);}
                40% {transform:scale(0.75,1.25);}
                50% {transform:scale(1.15,0.85);}
                65% {transform:scale(0.95,1.05);}
                75% {transform:scale(1.05,0.95);}
                to {transform:scale(1,1);}
            }

            .checkbox input:checked ~ .icon::after{
                opacity:1;
                transform:rotate(45deg) scale(1);
            }
        </style>
        `
    }
}
customElements.define("jeremy-jellycheckbox", JellyCheckBoxOfJT);
