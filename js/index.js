



const viewMoreButton = document.getElementById('view-more-button')
const bannerTitle = document.getElementById('banner-head');




function handleViewMore() {
    for (let i = 4; i < 7 ; i++) {
        let item = document.getElementById(`b${i}`)
        item.style.display = item.style.display === 'flex' ? 'none' : 'flex';
        
    }

    viewMoreButton.innerText = viewMoreButton.innerText === 'View Less' ? 'View More': 'View Less'
}

function handleTitleClick() {

}


function main() {
    viewMoreButton.addEventListener('click', ()=> {
        handleViewMore()
    });

    bannerTitle.addEventListener('click', ()=>{
        handleTitleClick()
    })
}

main()