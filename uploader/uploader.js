const submitArticle = async () => {
    const articleId = document.getElementById('articleId').value;
    const date = document.getElementById('date').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const tags = document.getElementById('tags').value;
    const fileObj = document.getElementById('mdFile').files;

    if ( articleId && date && title && description && category && tags ) {
        const reader = new FileReader();
        reader.onload = () => {
            const XHR = new XMLHttpRequest();
            XHR.addEventListener('load', () => { alert(XHR.status === 200 ? 'OK' : '500: error response') });
            XHR.addEventListener('error', () => { alert('error') });
            XHR.open('POST', '/api/v1/insert-article');
            XHR.setRequestHeader('Content-Type', 'application/json');
    
            const sendData = {
                articleId, 
                date, 
                title, 
                description, 
                category, 
                tag: tags.split(',').map((tag) => tag.replace(/ /g, '')),
                md: reader.result,
            };
        
            XHR.send(JSON.stringify(sendData));
        };
    
        reader.readAsText(fileObj[0]);
    } else {
        alert('入力漏れ');
    }
};