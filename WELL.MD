*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Inter', sans-serif;
    background-color: hsl(36, 100%, 99%);
    width: 100vw;
    margin: 1em 0;

}
header{
    width: 100%;
    padding: .5em 1.5em;
}
header img{
    float: left;
}
nav{
    display: none;
    flex-direction: column;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    background-color: white;
    padding: 2em 1em;
    margin-top: 4.5em;  
    height: 60vh; 
}
nav a{
    color: hsl(240, 100%, 5%);
    padding: 1em ;
    text-decoration: none;
}
.open-close{
    width: 100%;
    height: 30px;
    padding: 1.5em 0;
}
.menu-close{
    display: none;
    float: right;
}
.menu-open{
    display: block;
    float: right;
}
.desktop{
    display: none;
}
.mobile{
    width: 100%;
}
main{
    background-color: hsl(36, 100%, 99%);
    width: 100%;
    padding: 0 1.5em;

}
.large-text{
    margin-top: 10px;
}
.large-text h2{
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 45px;
}
.learn-more{
    margin-top: 10px;
    margin-bottom: 40px;
}
.learn-more p{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 15px;
    margin-bottom: 5px;
    color: hsl(236, 13%, 42%);
}
.learn-more button{
    width: 50%;
    height: 35px;
    border: none;
    background-color: hsl(5, 85%, 63%);
    color: hsl(36, 100%, 99%);
}
.new{
    background-color: hsl(240, 100%, 5%);
    color: hsl(36, 100%, 99%);
    padding: 1rem;
    margin-bottom: 40px;
}
.new h2{
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 35px;
    color: hsl(35, 77%, 62%);
}
.new h3{
    font-size: 18px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    padding: .5rem 0;
}
.new p{
    font-size: 10px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: hsl(233, 8%, 79%);
}
.new hr{
    color: hsl(230, 3%, 64%);
    font-weight: 100;
    margin: .5rem 0;
}
.d01, .d02, .d03{
    width: 100%;
    margin-bottom: 20px;
    height: 100px;
}
.d01 img,
.d02 img,
.d03 img {
    float: left;
    margin-right: .5rem;
    height: 100%;
}
.d01 h2,
.d02 h2,
.d03 h2{
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    color: hsl(233, 8%, 79%);
}
.d01 h3,
.d02 h3,
.d03 h3{
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: hsl(240, 100%, 5%);
    padding: .5rem 0;
}
.d01 p,
.d02 p,
.d03 p{
    font-size: 12px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: hsl(236, 13%, 42%);
}
