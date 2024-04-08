/*import  * as path from 'path';
import * as PDFDocument from 'pdfkit';
import * as fs from 'fs'

interface INombreColumna{
    titulo:string;
    columna:number
  }*/
  import * as fs from "fs";
  import { CharacterSet, Document, Packer, Paragraph, Tab, TextRun } from "docx";

import { firstValueFrom } from "rxjs"

/**
 * @param indices son los indices obtenidos del archivo exel
 * @description Genera el índice en pdf y lo almacena en rutaEscritura 
 * 
 */
export function generaIndice(indices?:any,rutaEscritura:string="default"){
    
    firstValueFrom(this.httpService.get(`https://drive.google.com/uc?export=download&id=1dO9z6BAqVPcdTDnfLTkYvnS5jKvT7lfE`,{ responseType:'arraybuffer'}))//copia la plantilla
        .then(async (arrayBuffer1:any)=>{
            const font = fs.readFileSync("./demo/assets/Pacifico.ttf");

            const doc = new Document({
                sections: [
                    {
                        properties: {},
                        children: [
                            new Paragraph({
                                run: {
                                    font: "Pacifico",
                                },
                                children: [
                                    new TextRun("Hello World"),
                                    new TextRun({
                                        text: "Foo Bar",
                                        bold: true,
                                        size: 40,
                                        font: "Pacifico",
                                    }),
                                    new TextRun({
                                        children: [new Tab(), "Github is the best"],
                                        bold: true,
                                        font: "Pacifico",
                                    }),
                                ],
                            }),
                        ],
                    },
                ],
                //fonts: [{ name: "Pacifico", data: font, characterSet: CharacterSet.ANSI }],
            });
            
            Packer.toBuffer(doc).then((buffer) => {
                this.googleDocService.creaDocumento(buffer,"indice",'1VDf6sK9Whc3SMwRgPMP9jl8KQ1b5lf7t')//crea un nuevo archivo en google, con la plantilla reemplazada
            });            
                    
                   
                    
    })
        
        
    

}


//se tiene que pasar a google drive