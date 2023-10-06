const API_URL = "https://balikpapan-1-api.up.railway.app";

const fetchBlogs = async () => {
    const BlogsContainer = document.getElementById("blog")

    const Blog = await fetch(`${API_URL}/blog`)
    const data = await Blog.json()
    console.log(data)
    //clear

    //pake data.data karena di api nya json nya ada message, baru data
    //jadi data ke-1 dari line 7 (await Blog.json())
    //data ke-2 dari struktur api nya
    data.data.forEach((element) => {
        console.log(element)
        const newBlogs = document.createElement('div')
        newBlogs.classList.add()
        newBlogs.innerHTML = `
        <div class="blog-box">
                <div class="blog-img">
                    <img src="${element.image}">
                </div>
                <div class="blog-details">
                    <h4>${element.title}</h4>
                    <p>${element.content}</p>
                    <a href="#">CONTINUE READING</a>
                </div>
                <h1>13/01</h1>
            </div>`

        
        BlogsContainer.appendChild(newBlogs)
        
    })

    BlogsContainer


};

fetchBlogs()