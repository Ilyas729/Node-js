type Book={
    author: string,
    title: string,
    readingStatus: boolean
}

const library: Book[] =[
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Stev Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false 
    }
];
if(library[0].readingStatus==true){
    console.log(`${library[0].title} by ${library[0].author} is read`);
    
}else{
    console.log(`${library[0].title} by ${library[0].author} is not read`);
    
}
if(library[1].readingStatus==true){
    console.log(`${library[1].title} by ${library[1].author} is read`);
    
}else{
    console.log(`${library[1].title} by ${library[1].author} is not read`);
    
}
if(library[2].readingStatus==true){
    console.log(`${library[2].title} by ${library[2].author} is read`);
    
}else{
    console.log(`${library[2].title} by ${library[2].author} is not read`);
    
}
