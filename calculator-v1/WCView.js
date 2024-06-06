import { WCController } from './WCController.js';


class WCView extends HTMLElement// es un lemento del DOM
{
    // @TODO:
    //
    // *No se puede escribir en el input display
    // Especificar los botones de la calculadora{operandos y operadores}
	constructor(modelInstance)
	{
		super();

		this._innerController = new WCController(this, modelInstance);// comunicando la vista con el modelo
		
        //this es parte del DOM
        //con .document accedo a todo el html
        this._inputDisplay = document.createElement('input');
        this._sumarButton = document.createElement('button');
        this._restarButton = document.createElement('button');
        this._multiplicarButton = document.createElement('button');
        this._dividirButton = document.createElement('button'); //etiquetas de html
        this._igualButton = document.createElement('button');
        
        this._ceroButton= document.createElement('button');
        this._unoButton= document.createElement('button');
        this._dosButton= document.createElement('button');
        this._tresButton= document.createElement('button');
        this._cuatroButton= document.createElement('button');
        this._cincoButton= document.createElement('button');
        this._seisButton= document.createElement('button');
        this._sieteButton= document.createElement('button');
        this._ochoButton= document.createElement('button');
        this._nueveButton= document.createElement('button');

        this._ceroButton.innerText = "0";
        this._unoButton.innerText = "1";
        this._dosButton.innerText = "2";
        this._tresButton.innerText = "3";
        this._cuatroButton.innerText = "4";
        this._cincoButton.innerText = "5";
        this._seisButton.innerText = "6";
        this._sieteButton.innerText = "7";
        this._ochoButton.innerText = "8";
        this._nueveButton.innerText = "9";
        
        this._ceroButton.value = "0";
        this._unoButton.value = "1";
        this._dosButton.value = "2";
        this._tresButton.value = "3";
        this._cuatroButton.value = "4";
        this._cincoButton.value = "5";
        this._seisButton.value = "6";
        this._sieteButton.value = "7";
        this._ochoButton.value = "8";
        this._nueveButton.value = "9";
        
        this._sumarButton.innerText = '+';
        this._restarButton.innerText = '-';
        this._multiplicarButton.innerText = '*';
        this._dividirButton.innerText = '/';
        this._igualButton.innerText = '=';
        
        // efectuo otra propiedad
        this._sumarButton.value = '+';
        this._restarButton.value = '-';
        this._multiplicarButton.value = '*';
        this._dividirButton.value = '/';
        this._igualButton.value = '=';

        this.appendChild(this._inputDisplay);
        this.appendChild(this._sumarButton);//append : agregando al elemento "this"
        this.appendChild(this._restarButton);
        this.appendChild(this._multiplicarButton);
        this.appendChild(this._dividirButton);
        this.appendChild(this._igualButton);

        this.appendChild(this._ceroButton);
        this.appendChild(this._unoButton);
        this.appendChild(this._dosButton);
        this.appendChild(this._tresButton);
        this.appendChild(this._cuatroButton);
        this.appendChild(this._cincoButton);
        this.appendChild(this._seisButton);
        this.appendChild(this._sieteButton);
        this.appendChild(this._ochoButton);
        this.appendChild(this._nueveButton);
        
	}
    initCallbacks(){
        this._igualButton.onclick = () => {this._innerController.evaluarExpresion()};
        this._ceroButton.onclick = () => {this._inputDisplay.value+=this._ceroButton.value};//+= concatenacion 
        this._unoButton.onclick = () => {this._inputDisplay.value+=this._unoButton.value};
        this._dosButton.onclick = () => {this._inputDisplay.value+=this._dosButton.value};
        this._tresButton.onclick = () => {this._inputDisplay.value+=this._tresButton.value};
        this._cuatroButton.onclick = () => {this._inputDisplay.value+=this._cuatroButton.value};
        this._cincoButton.onclick = () => {this._inputDisplay.value+=this._cincoButton.value};
        this._seisButton.onclick = () => {this._inputDisplay.value+=this._seisButton.value};
        this._sieteButton.onclick = () => {this._inputDisplay.value+=this._sieteButton.value};
        this._ochoButton.onclick = () => {this._inputDisplay.value+=this._ochoButton.value};
        this._nueveButton.onclick = () => {this._inputDisplay.value+=this._nueveButton.value};
        this._sumarButton.onclick = () => {this._inputDisplay.value+=this._sumarButton.value};
        this._restarButton.onclick = () => {this._inputDisplay.value+=this._restarButton.value};
        this._multiplicarButton.onclick = () => {this._inputDisplay.value+=this._multiplicarButton.value};
        this._dividirButton.onclick = () => {this._inputDisplay.value+=this._dividirButton.value};
    }

    obtenerExpresion(){
        return (this._inputDisplay.value);
        
    }
    borrarImputDisplay(){
        this._inputDisplay.value = " ";
    }
	setResultado(resultado){
        
        this._inputDisplay.value = resultado;
    }
    borrarUltimoCaracter() {
    const expresionLength = (this._inputDisplay.value.lenght);
    this._inputDisplay.value[expresionLenght] = "";
    }


	connectedCallback()
	{
        this.initCallbacks();
    }

	disconnectedCallback()
	{
		//this._loginButton.onclick = null; propiedad del HtmlElement
	}

	adoptedCallback()
	{

	}

	attributeChangedCallback(oldValue, newValue)
	{

	}

	static observableAttributes()
	{
		return [];
	}
}

customElements.define('wc-view', WCView);

export {WCView};