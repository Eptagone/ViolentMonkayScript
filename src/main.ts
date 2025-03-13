import VM from "@violentmonkey/dom";

console.log("My Userscript: Hello World!");

VM.observe(document.body, () => {
    console.log("Document changed!");
});
