describe('API Testing', () => {

    before(() => {

        // cy.fixture('apiData.json').then((data) => {

        //     this.data = data

        // })

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

    it('API Github Token', () => {

        cy.request({

            method: 'GET',
            url: 'https://api.github.com/user/repos',
            headers: {
                "Authorization" : "Bearer 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"
            }

        }).then((apiResult) => {

            expect(apiResult.status).to.eq(200)
            expect(apiResult.body[3].full_name).to.contain('cypress_capstone')
            expect(apiResult.duration).to.be.below(1000)

        })

    })

    it.skip('API Create Repository', () => {

        cy.request({

            method: 'POST',
            url: 'https://api.github.com/user/repos',


            
        })

    })

})