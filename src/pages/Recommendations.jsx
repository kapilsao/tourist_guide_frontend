import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Recommendations() {
  return (
    <div className="flex flex-col min-h-[100dvh]">

      <header className="bg-black text-white py-8 px-4 md:px-6">
        <div className="container mx-auto space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Discover the Best Tourist Spots</h1>
          <p className="max-w-[800px] text-lg md:text-xl">
            Explore our curated selection of top-rated tourist destinations tailored to your interests.
          </p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="Building Exterior.png" />
          <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="Building Exterior.png" />
          <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="Building Exterior.png" />
          <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="Building Exterior.png" />
          <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="Building Exterior.png" />
          <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="Building Exterior.png" />
          <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="Building Exterior.png" />
          <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="Building Exterior.png" />
          <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

            
        

        </div>
      </main>

    </div>
    
  )
}

export default Recommendations