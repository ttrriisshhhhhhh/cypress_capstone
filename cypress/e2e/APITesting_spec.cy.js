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

    it('Get', () => {

        cy.request('GET', 'https://reqres.in/api/users/2').then((response) => {

            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq('Stella')
            expect(response.body.job).to.eq('QA Lead')

        })

    })

})