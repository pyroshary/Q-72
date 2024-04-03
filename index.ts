//let and const only work insside the block
{
    let blockLet = "Visible inside the block";
    const blockConst ="const inside the box"
    console.log(blockLet);
    console.log(blockConst);
    }
try{
    console.log(blockLet);
} catch(error){console.log("this is not accesable outside the box");}
try{
    console.log(blockConst);
} catch(error){console.log("this is not accesable outside the box");}
