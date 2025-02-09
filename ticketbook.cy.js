describe('Ticket booking Autotest',()=>{
    it('Book ticket',()=>{
        cy.visit('https://ticketnew.com/movies')
        cy.get('.MobileMovieCitySelector_topCitiesWrap__875yf').should('be.visible')
        cy.get('.AnimatedSearchBar_animInput__jXaLQ').type('chennai')
        cy.get('.MobileMovieCitySelector_searchedArea__PFL4J > div').click()
        cy.get('[aria-label="Language filter"]').click()
        cy.get("input[value='Tamil']").check()
        cy.get('.Button_btn__NHo2w').click()
        cy.get(':nth-child(2) > .H5RunningMovieV2_runningMovie__5uA8A > .H5RunningMovieV2_movieDetails__uNOSv').click()
        cy.get('[href="/movies/siren-movie-detail-156173?frmtid=z5cmotjq_&fromdate=2024-03-03"] > .DatesMobileV2_movieDateText__KWrcz').click()
       cy.wait(3000)
        cy.get(':nth-child(4) > .MovieSessionsListing_col2__4GGXs > :nth-child(1) > .greenCol').click()
       // cy.get(':nth-child(4) > .FixedSeating_seatL__dETyY > :nth-child(14) > .available').click()
        //cy.get(':nth-child(4) > .FixedSeating_seatL__dETyY > :nth-child(15) > .available').click()
        //cy.get('.Button_btn__NHo2w').click()
    })
})