import {SingleService} from "./single.service";


describe('Single Service', () => {

  //beforeEach
  beforeEach(() => {
    console.log('beforeEach')
  })

  //beforeAll
  beforeAll(() => {
    console.log('beforeAll')
  })



  // afterEach
  // afterAll

  it('debe retornar "Angular-Test" cuando llame al metodo getNameApp', () => {

    let service: SingleService = new SingleService()
    const textExpect = "Angular-Test"

    const textMethod = service.getNameApp()

    expect(
      textMethod
    ).toEqual(textExpect)

  })

  it('debe devolverme "Tuesday" cuando llame al metodo getDay con el parametro [1]', () => {
    let service: SingleService = new SingleService()
    const textExpect = "Tuesday"

    expect(
      service.getDay(1)
    ).toEqual(textExpect)

  })

  it('debe devolverme "Nothing" cuando llame al metodo getDay con un parametro fuera de rango', () => {
    let service: SingleService = new SingleService()
    const textExpect = "Nothing"

    expect(
      service.getDay(15)
    ).toEqual(textExpect)

  })

})
