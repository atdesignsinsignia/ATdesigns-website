const testimonials = [
    { text: "Our client received their buckles yesterday and handed them out today. They were a huge hit. Could not have asked for a better product!!!", author: "Jeff" },
    { text: "The buckles are beautiful. I don't think I could have asked for a better buckle. I look forward to doing business with you guys in the future.", author: "DR" },
    { text: "Many reviews received, numerous and so positive, including the Mayor. Thanks for helping their small city celebrate in great detail.", author: "JK" },
    { text: "Our client received the ornaments today and WOW, they thought they were beautiful!", author: "JD" },
    { text: "Just thought I'd let you know that the medallions were delivered today and the 'powers-that-be' have seen them and were very impressed.", author: "AC" },
    { text: "Got some nice feedback from the Reagan Library...They love the belt buckle!", author: "LC" },
    { text: "I have the pins!! They look really good. Thanks again for your hard work in getting me pins in time for our meeting!", author: "SM" },
    { text: "I was really surprised at the level of detail AT was able to attain with our bat skull logo design! What self-respecting horror fan wouldn't put that on their belt?", author: "GP" },
    { text: "Thank you for the work you did on the Ozarks Medals.  They look better than we thought they would but so does everything else you all do.  Pass my thanks along to everyone involved.", author: "BV" },
    { text: "Thank you for helping us out on such short notice...The military base here is a huge client and we always want to be able to accommodate the various units and with your help we can do it.", author: "BC" },
    { text: "I am on a discussion group for promotional products and when the topic of pins comes up, I always mention AT Designs. You guys always do a good job", author: "TS" },
    { text: "The gold lapel pins and pendants that AT Designs created for my client's 50th Anniversary are fabulous. The gold color coupled with the great detail was even better than I imagined.", author: "JM"},
    { text: "I appreciate everything and can very honestly say, I have never gone anywhere else for custom medals. I don't believe in messing with Success!", author: "JF"}
    // Add other testimonials here following the same structure
];


let currentTestimonial = 0;

function displayTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    const testimonialElement = $('.testimonials');

    testimonialElement.html('"' + testimonial.text + '"<br>- ' + testimonial.author).fadeIn(1000);

    setTimeout(() => {
        testimonialElement.fadeOut(1000, () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            displayTestimonial();
        });
    }, 4000);
}

$(document).ready(() => {
    displayTestimonial();
});
