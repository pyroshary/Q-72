//let and const only work insside the block
{
    var blockLet = "Visible inside the block";
    var blockConst = "const inside the box";
    console.log(blockLet);
    console.log(blockConst);
}
try {
    console.log(blockLet);
}
catch (error) {
    console.log("this is not accesable outside th box");
}
try {
    console.log(blockConst);
}
catch (error) {
    console.log("this is not accesable outside th box");
}
