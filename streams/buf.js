let buf = Buffer.alloc(26);

for(var i=0; i<26; i++) {
    buf[i] = i + 97; // 97 is ascii a
}

console.log(buf);
console.log(buf.toString('utf8'));