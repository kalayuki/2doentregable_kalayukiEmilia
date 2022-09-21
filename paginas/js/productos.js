class Producto {
    constructor(tipo, nombre, medida, precio,img) {
      this.tipo = tipo;
      this.nombre = nombre;
      this.medida = medida;
      this.precio = precio;
      this.img=img
    }
  }
  //Array de objetos producto
  const productos = [
    new Producto("DESAYUNOS Y MERIENDAS", "ALMOHADITAS", "250g", 190,"../asset/desayunos_y_meriendas/almuhaditas__granix.jpg"),
    new Producto("DESAYUNOS Y MERIENDAS", "QUINOA POP", "100g", 90,"../asset/desayunos_y_meriendas/quinoa_pop.jpg"),
    new Producto("DESAYUNOS Y MERIENDAS", "PASTA DE MANI", "500g", 90,"../Asset/desayunos_y_meriendas/mantequilla_de_mani.jpg"),
    new Producto("FRUTOS SECOS", "ALMENDRAS", "1KG", 1700,"../Asset/frutos_secos/Almendras_non_pareil.jpg"),
    new Producto("FRUTOS SECOS", "NUEZ", "100G", 200,"../asset/frutos_secos/Nuez_maripos.jpg"),
    new Producto("FRUTOS SECOS","NUEZ PECCAN","100G",1200,"../asset/frutos_secos/Nuez_maripos.jpg"),
    new Producto("LECHES VEGETALES", "LECHE DE ALMENDRAS", "1L", 320,"../asset/leche_vegetales/leche_almendras_tratenfux1lt.jpg"),
    new Producto("LECHES VEGETALES", "LECHE DE COCO", "1L", 350,"../Asset/leche_vegetales/leche_coco_greenfood.jpg"),
    new Producto("LECHES VEGETALES", "LECHE DE COCO", "910ml", 250,"../Asset/leche_vegetales/leche_coco_greenfood.jpg"),
    new Producto("LECHES VEGETALES", "LECHE DE ARROZ", "1L", 350,"../Asset/leche_vegetales/leche_arroz_x1lt_tratenfu.jpg"),
    new Producto("LEGUMBRES Y SEMILLAS", "LENTEJAS", "500g", 160,"../Asset/legumbres_y_semillas/lenteja-x-500-grs.jpg"),
    new Producto("LEGUMBRES Y SEMILLAS", "GARBANZO", "500g", 160,"../asset/legumbres_y_semillas/garbanzo_organicos.jpg"),
    new Producto("LEGUMBRES Y SEMILLAS", "POROTO ADUKI", "500g", 160,"../asset/legumbres_y_semillas/porotos_aduki_organicos.jpg"),
    new Producto("LEGUMBRES Y SEMILLAS", "POROTO DE SOJA", "500g", 190,"../Asset/legumbres_y_semillas/porotos_de_soja.jpg"),
    new Producto("LEGUMBRES Y SEMILLAS", "POROTO BLANCO", "500g", 190,"../Asset/legumbres_y_semillas/porotos_blancos.jpg" ),
    new Producto("ACEITES Y CONDIMENTOS", "ACEITE DE COCO", "360ml", 450,"../Asset/aceites/aceite_de_coco.jpg"),
    new Producto("ACEITES Y CONDIMENTOS", "ACEITE DE OLIVA", "500ml", 850,"../Asset/aceites/aceite_de_oliva.jpg"),
    new Producto("ACEITES Y CONDIMENTOS", "ACETO", "250ml", 350,"../Asset/aceites/aceto-balsamico.jpg"),
    new Producto("MIX", "MIX PREMIUM", "500g", 750,"../Asset/mix/mix_clasico.jpg"),
    new Producto("MIX", "MIX NEMU", "500g", 850,"../Asset/mix/mix_clasico.jpg"),
    new Producto("MIX", "MIX SALADO", "500g", 400,"../asset/mix/mix_salado.jpg"),
    new Producto("MIX", "MIX BASICO", "500g", 400,"../asset/mix/mix_clasico.jpg"),
    new Producto("MIX", "MIX TROPICAL", "500g", 450,"../Asset/mix/mix_tropical.jpg"),
  ];

  let desayunoMerienda=document.getElementById("desayu_merienda")
  let frutosSecos=document.getElementById("frutos__secos")
  let lechesVegetales=document.getElementById("Leches__vegetales")
  let semillaLegumbre=document.getElementById("Semillas__y__legumbres")
  let aceitesCondimentos=document.getElementById("aceites__y__condimentos")
  let mix=document.getElementById("Mixs")
  

  let temp = document.querySelector("template")
  let card = temp.content.querySelector("div")

 
  function temple (cardClonada,producto){
    cardClonada.children[0].src=producto.img
    cardClonada.children[1].innerText=producto.nombre
    cardClonada.children[2].innerText=`Por ${producto.medida}`
    cardClonada.children[3].innerText=`$${producto.precio}`
    cardClonada.children[4].addEventListener("click",(e)=>{
       console.log(`${producto.nombre}`)  })   
    cardClonada.children[5].addEventListener("click",()=>{
        alert(`Agregaste ${producto.nombre} `)})
   
}

let resultado =document.querySelector("input")

  productos.forEach((producto)=>{
    let cardClonada= card.cloneNode(true);
    temple(cardClonada,producto)
    
    
    if(producto.tipo ==="DESAYUNOS Y MERIENDAS"){
    desayunoMerienda.appendChild(cardClonada)
    
   

    }else if(producto.tipo==="FRUTOS SECOS"){
    frutosSecos.appendChild(cardClonada)
    
    
    }else if(producto.tipo==="LECHES VEGETALES"){
    lechesVegetales.appendChild(cardClonada)

    }else if(producto.tipo ==="LEGUMBRES Y SEMILLAS"){
    semillaLegumbre.appendChild(cardClonada)
   
    }else if(producto.tipo === "ACEITES Y CONDIMENTOS"){
    aceitesCondimentos.appendChild(cardClonada)
    
    }else if(producto.tipo === "MIX"){
        mix.appendChild(cardClonada)
    }

    
  })

