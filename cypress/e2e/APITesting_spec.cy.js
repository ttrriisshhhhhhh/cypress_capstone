describe('API Testing', () => {
    beforeEach(function() {
        cy.fixture('apiData.json').then(function(dataAPI) {      // use of function() syntax because arrow function doesnt read 'this'
            this.dataAPI = dataAPI
        })
    })

    it.skip('Create User', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                'name' : 'Stella',
                'job' : 'QA Lead'
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq('Stella')
            expect(response.body.job).to.eq('QA Lead')
        })
    })

    it('API Github Token', function() {
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user/repos',
            headers: {
                "Authorization" : "Bearer " + this.dataAPI.token + this.dataAPI.token2
            }
        }).then((apiResult) => {
            expect(apiResult.status).to.eq(200)
            expect(apiResult.body[3].full_name).to.contain('cypress_capstone')
            expect(apiResult.duration).to.be.below(2000)
        })
    })

    it('API Create Repository', function() {
        cy.request({
            method: 'POST',
            url: 'https://api.github.com/user/repos',
            body: {
                'name' : 'create_repo'
            }, 
            headers : {
                "Authorization" : "Bearer " + this.dataAPI.token + this.dataAPI.token2,
                "Content-Type" : "application/json"
            }
        }).then((apiResult) => {
            expect(apiResult.status).to.eq(201)
            expect(apiResult.duration).to.be.below(2000)
        })
    })
})