
var lenght=process.argv.length;
var result=0;
for (var i = 2; i < lenght; i++) {
	result+= Number(process.argv[i]);
};

console.log(result);
