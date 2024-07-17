// HomePage.js
import React from 'react';
import './styles.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import MoleculeCard from '../components/Molecules/MoleculeCard';
import molecule1 from '../images/molecule1.jpg';
import molecule2 from '../images/molecule2.jpg';
import molecule3 from '../images/molecule3.jpg';

const HomePage = () => {
  const moleculeOfTheMonth = {
    peptaloid_id: "PT133527",
    smiles: "CC[C@H](C)[C@H](N(C)C)C(=O)N[C@H]1[C@@H](Oc2ccc(cc2)C(O)CNC(=O)[C@H](Cc3ccccc3)NC1=O)C(C)C",
    MolecularFormula: "C31H44N4O5",
    IUPACName: " (2S,3S)-N-[(3S,4S,7S)-7-benzyl-11-hydroxy-5,8-dioxo-3-propan-2-yl-2-oxa-6,9-diazabicyclo[10.2.2]hexadeca-1(14),12,15-trien-4-yl]-2-(dimethylamino)-3-methylpentanamide",
    Compound_Name: "Pandamine",
    // Add more properties as needed
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="heading">Welcome to the Peptaloid Database Home Page</h2>
        <p className="paragraph">
          The first peptide alkaloid discovered was pandamine, obtained from the crude alkaloid fraction of Panda oleosa Pierre root bark. It represents the first cyclopeptidic alkaloid ever elucidated and holds a specific importance in the phytochemical class of cyclopeptide alkaloids. Pandamine marked the beginning of considerable interest in these natural products, which now encompass more than 160,000 entries.
        </p>
        <Carousel images={[molecule1, molecule2, molecule3]} />
        <div className="section">
          <h2 className="section-heading">Molecule of the Month</h2>
          <div className="section-content">
            <MoleculeCard molecule={moleculeOfTheMonth} isBrowsing={true} />
          </div>
        </div>
        <div className="section">
          <h2 className="section-heading">News about Peptaloid</h2>
          <div className="section-content">
            <p>Stay updated with the latest news, events, and developments related to peptide alkaloids, drug discovery, and scientific research.</p>
          </div>
        </div>
        <div className="section">
          <h2 className="section-heading">Featured Research</h2>
          <div className="section-content">
            <p>Explore groundbreaking research articles, publications, and studies highlighting the therapeutic potential and ecological significance of peptide alkaloids.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
