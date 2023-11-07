//@ts-ignore


import React, { useEffect } from 'react'
import { useFormData } from '../FormDataProvider';
import { numberToWords } from '../components/numberToWords';
import Navbar from '../components/Navbar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

interface BillPageProps {
  // Add your prop types here
}

const BillPage: React.FC<BillPageProps> = ({}) => {
const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        // ...
      } else {
        // User is signed out
        navigate('/login');
      }
    });
  }, []);
  
    const { formData
        // , setFormData 
    } = useFormData();

    const monthNoToName = (month: string) => {
        const today = new Date(month);
        // Getting full month name (e.g. "September")
        const monthName = today.toLocaleString('default', { month: 'long' });
        return (monthName);
    };

    const formatedDate = (dategiven: string) => {
        const inputDate = dategiven; // Given date string

// Create a new Date object from the input date string
const date = new Date(inputDate);

// Extract day, month, and year components
const day = date.getDate().toString().padStart(2, '0'); // Ensure 2-digit day with leading zero
const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed, hence adding 1
const year = date.getFullYear();

// Format the date as dd-mm-yyyy
const formattedDate = `${day}-${month}-${year}`;
return formattedDate;
    };
  return (
    <>
    <Navbar Print={true} Logout={false} backBtn={true}></Navbar>
    <div className="WordSection1 max-w-screen-sm lg:max-w-screen-lg mx-auto px-0 lg:px-4 mt-10">
      <div className="relative">
        <img src="./bg.jpg" className='absolute px-0 pt-72' alt="" />
        <div className="w-full mx-auto">
        <table className="w-full relative" border={0} cellSpacing={0} cellPadding={0} align="left" style={{borderCollapse: 'collapse'}}>
          <tbody><tr className='font-century' style={{  height: '19.85pt'}}>
              <td width={728} colSpan={2} style={{width: '545.75pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '19.85pt'}}>
                <p className="MsoNormal"  style={{marginTop: '0cm', marginRight: '-16.7pt', marginBottom: '0cm', marginLeft: '-18.0pt', textAlign: 'center', lineHeight: 'normal'}}><b><span style={{fontSize: '40.0pt'}}>&nbsp;</span></b><b><span lang="EN-US" style={{textShadow: "3px 4px #80808073", fontSize: '40.0pt'}}>M/S JAYA PRASAD</span></b></p>
              </td>
            </tr>
            <tr style={{ height: '19.85pt'}}>
              <td width={728} colSpan={2} style={{width: '545.75pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '19.85pt'}}>
                <p className="MsoNormal"  style={{marginTop: '6.0pt', marginRight: '-16.55pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'center', lineHeight: '50%'}}><span className='flex justify-center' lang="EN-US" style={{}}><img width={698} height={45} id="_x0000_i1025" src="./header.jpg" /></span></p>
              </td>
            </tr>
            <tr className="font-cambria" style={{ height: '19.85pt'}}>
              <td width={346} style={{width: '259.15pt', border: 'none', borderBottom: 'solid windowtext 2.25pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '19.85pt'}}>
                <p className="MsoNormal" style={{marginTop: '6.0pt', marginRight: '0cm', marginBottom: '0cm', marginLeft: '0cm', lineHeight: '50%'}}><b><u><span lang="EN-US" style={{fontSize: '14.0pt', lineHeight: '50%', color: 'black'}}>Contact Us:</span></u></b></p>
                <p className="MsoNormal" style={{marginTop: '6.0pt', marginRight: '0cm', marginBottom: '0cm', marginLeft: '0cm', lineHeight: '50%'}}><span className="GramE"><u><span lang="EN-US" style={{fontSize: '14.0pt', lineHeight: '50%', color: 'black'}}>Mobile :</span></u></span><u><span lang="EN-US" style={{fontSize: '14.0pt', lineHeight: '50%', color: 'black'}}> </span></u><span lang="EN-US" style={{fontSize: '14.0pt', lineHeight: '50%', color: 'black'}}>+919199268309</span></p>
                <p className="MsoNormal" style={{marginTop: '6.0pt', marginRight: '0cm', marginBottom: '0cm', marginLeft: '0cm', lineHeight: '50%'}}><u><span lang="EN-US" style={{fontSize: '14.0pt', lineHeight: '50%', color: 'black'}}>Alternate: </span></u><span lang="EN-US" style={{fontSize: '14.0pt', lineHeight: '50%', color: 'black'}}>+919835564510</span></p>
                <p className="MsoNormal" style={{marginBottom: '0cm', lineHeight: 'normal'}}><u><span lang="EN-US" style={{fontSize: '14.0pt', color: 'black'}}>E-mail <span className="GramE">: <span style={{textDecoration: 'none'}}>&nbsp;jayapd1979@gmail.com</span></span></span></u></p>
              </td>
              <td width={382} style={{width: '286.6pt', border: 'none', borderBottom: 'solid windowtext 2.25pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '19.85pt'}}>
                <p className="MsoNormal"  style={{marginTop: '6.0pt', marginRight: '-16.55pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'center', lineHeight: '50%'}}><b><u><span lang="EN-US" style={{fontSize: '14.0pt', lineHeight: '50%', color: 'black'}}>Business <span className="GramE">Address<span style={{textDecoration: 'none'}}> :</span></span></span></u></b></p>
                <p className="MsoNormal"  style={{marginTop: '6.0pt', marginRight: '-16.55pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'center', lineHeight: '50%'}}><span className="SpellE"><span className="GramE"><span lang="EN-US" style={{fontSize: '12.0pt', lineHeight: '50%', color: 'black'}}>H.No</span></span></span><span lang="EN-US" style={{fontSize: '12.0pt', lineHeight: '50%', color: 'black'}}> B/b block 1283/84 , New line ,</span></p>
                <p className="MsoNormal"  style={{marginTop: '6.0pt', marginRight: '-16.55pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'center', lineHeight: '50%'}}><span className="GramE"><span lang="EN-US" style={{fontSize: '12.0pt', lineHeight: '50%', color: 'black'}}>Sonari ,</span></span><span lang="EN-US" style={{fontSize: '12.0pt', lineHeight: '50%', color: 'black'}}> Near Sonari Airport ,</span></p>
                <p className="MsoNormal"  style={{marginBottom: '0cm', textAlign: 'center', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '12.0pt', color: 'black'}}>Jamshedpur,
                    831011</span></p>
              </td>
            </tr>
            <tr className='font-cambria' style={{ height: '19.85pt'}}>
              <td width={346} style={{textAlign:"left", border: 'none', borderBottom: 'solid windowtext 2.25pt', background: '#D0CECE', padding: '0cm 5.4pt 0cm 5.4pt', height: '19.85pt'}}>
                <p className="MsoNormal" style={{marginBottom: '0cm', lineHeight: 'normal'}}><span className="SpellE"><span className="GramE"><u><span lang="EN-US" style={{fontSize: '14.0pt', color: 'black'}}>Ref.No</span></u></span></span><span className="GramE"><u><span lang="EN-US" style={{fontSize: '14.0pt', color: 'black'}}>. :</span></u><span lang="EN-US" style={{fontSize: '14.0pt', color: 'black', textTransform: 'uppercase'}}>fk</span></span><span lang="EN-US" style={{fontSize: '14.0pt', color: 'black', textTransform: 'uppercase'}}>{`-INF/`+`${formData.billNumber}`}(</span><span lang="EN-US" style={{fontSize: '9.0pt', color: 'black', textTransform: 'uppercase'}}>{monthNoToName(formData.billMonth)}</span><span lang="EN-US" style={{fontSize: '14.0pt', color: 'black', textTransform: 'uppercase'}}>)</span></p>
              </td>
              <td width={382} style={{width: '286.6pt', border: 'none', borderBottom: 'solid windowtext 2.25pt', background: '#D0CECE', padding: '0cm 5.4pt 0cm 5.4pt', height: '19.85pt'}}>
                <p className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'right', lineHeight: 'normal'}}><span className="GramE"><span lang="EN-US" style={{fontSize: '14.0pt', color: 'black'}}>Date :</span></span><span lang="EN-US" style={{fontSize: '14.0pt', color: 'black'}}> {formatedDate(formData.billDate)}</span></p>
              </td>
            </tr>
            <tr className='font-imprint' style={{ height: '19.85pt'}}>
              <td width={728} colSpan={2} style={{width: '545.75pt', background: 'white', padding: '0cm 5.4pt 0cm 5.4pt', height: '19.85pt'}}>
                <p className="MsoNormal"  style={{marginTop: '0cm', marginRight: '-16.7pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'center', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '40.0pt', color: 'black'}}>Invoice</span></p>
              </td>
            </tr>
          </tbody></table>
          </div>        
          </div>        
        <table className="font-calibri w-full relative" border={0} cellSpacing={0} cellPadding={0} align="left" style={{ borderCollapse: 'collapse'}}>
          <tbody><tr style={{  height: '12.1pt'}}>
              <td width={377} colSpan={5} valign="top" style={{width: '282.75pt', border: 'solid windowtext 1.5pt', borderBottom: 'solid windowtext 1.0pt', background: '#D0CECE', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal"  style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'center', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '14.0pt', color: 'black'}}>Bill To
                      Party</span></b></p>
              </td>
              <td width={387} colSpan={4} valign="top" style={{width: '290.6pt', borderTop: 'solid windowtext 1.5pt', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', background: '#D0CECE', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal"  style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'center', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '14.0pt', color: 'black'}}>Place of
                      Supply</span></b></p>
              </td>
            </tr>
            <tr style={{ height: '12.1pt'}}>
              <td width={377} colSpan={5} valign="top" style={{textAlign:"left",width: '282.75pt', borderTop: 'none', borderLeft: 'solid windowtext 1.5pt', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span className="GramE"><b><span lang="EN-US" style={{fontSize: '14.0pt'}}>Name :</span></b></span><span lang="EN-US" style={{fontSize: '14.0pt'}}> Feedback Infra Pvt. Ltd. </span></p>
              </td>
              <td width={387} colSpan={4} valign="top" style={{width: '290.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '14.0pt'}}>&nbsp;</span></p>
              </td>
            </tr>
            <tr style={{ height: '12.1pt'}}>
              <td width={377} colSpan={5} valign="top" style={{textAlign:"left", width: '282.75pt', borderTop: 'none', borderLeft: 'solid windowtext 1.5pt', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span className="GramE"><b><span lang="EN-US" style={{fontSize: '14.0pt'}}>Address :</span></b></span><span lang="EN-US" style={{fontSize: '14.0pt'}}> <span className="SpellE">Ashoknagar,Ranchi</span></span></p>
              </td>
              <td width={387} colSpan={4} valign="top" style={{width: '290.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span className="SpellE"><span className="GramE"><span lang="EN-US" style={{fontSize: '14.0pt'}}>Ashoknagar</span></span></span><span className="GramE"><span lang="EN-US" style={{fontSize: '14.0pt'}}> ,</span></span><span lang="EN-US" style={{fontSize: '14.0pt'}}> Ranchi ,
                    Jharkhand</span></p>
              </td>
            </tr>
            <tr style={{ height: '12.1pt'}}>
              <td width={377} colSpan={5} valign="top" style={{textAlign:"left", width: '282.75pt', borderTop: 'none', borderLeft: 'solid windowtext 1.5pt', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span className="GramE"><b><span lang="EN-US" style={{fontSize: '14.0pt'}}>GSTIN :</span></b></span><span lang="EN-US" style={{fontSize: '14.0pt'}}> -</span></p>
              </td>
              <td width={387} colSpan={4} valign="top" style={{width: '290.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '14.0pt'}}>Pin-834002</span></p>
              </td>
            </tr>
            <tr style={{ height: '12.1pt'}}>
              <td width={377} colSpan={5} valign="top" style={{textAlign:"left", width: '282.75pt', borderTop: 'none', borderLeft: 'solid windowtext 1.5pt', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '14.0pt'}}>State:</span></b><span lang="EN-US" style={{fontSize: '14.0pt'}}> Jharkhand</span></p>
              </td>
              <td width={387} colSpan={4} valign="top" style={{width: '290.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '14.0pt'}}>&nbsp;</span></b></p>
              </td>
            </tr>
            <tr style={{ height: '12.1pt'}}>
              <td width={377} colSpan={5} valign="top" style={{textAlign:"left", width: '282.75pt', borderTop: 'none', borderLeft: 'solid windowtext 1.5pt', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span className="SpellE"><b><span lang="EN-US" style={{fontSize: '14.0pt'}}>Zipcode</span></b></span><b><span lang="EN-US" style={{fontSize: '14.0pt'}}>:</span></b><span lang="EN-US" style={{fontSize: '14.0pt'}}> 834002</span></p>
              </td>
              <td width={387} colSpan={4} valign="top" style={{width: '290.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '14.0pt'}}>&nbsp;</span></b></p>
              </td>
            </tr>
            <tr style={{ height: '12.1pt'}}>
              <td width={377} colSpan={5} valign="top" style={{textAlign:"left",width: '282.75pt', border: 'solid windowtext 1.5pt', borderTop: 'none', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '14.0pt'}}>VEHICLE NO.:</span></b><span lang="EN-US" style={{fontSize: '14.0pt'}}> JH-05CH-2817</span></p>
              </td>
              <td width={387} colSpan={4} valign="top" style={{width: '290.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.5pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '14.0pt'}}>&nbsp;</span></b></p>
              </td>
            </tr>
            <tr style={{ height: '12.1pt'}}>
              <td width={37} rowSpan={2} valign="top" style={{width: '27.95pt', borderTop: 'none', borderLeft: 'solid windowtext 1.5pt', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>Sno</span></b></p>
              </td>
              <td width={189} rowSpan={2} valign="top" style={{width: '141.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>Service
                      Description</span></b></p>
              </td>
              <td width={47} rowSpan={2} valign="top" style={{width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>Unit</span></b></p>
              </td>
              <td width={76} rowSpan={2} valign="top" style={{width: '2.0cm', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>Base Rate</span></b></p>
              </td>
              <td width={151} colSpan={2} rowSpan={2} valign="top" style={{width: '4.0cm', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      Taxable value</span></b></p>
              </td>
              <td width={132} colSpan={2} valign="top" style={{width: '99.25pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      IGST</span></b></p>
              </td>
              <td width={132} rowSpan={2} valign="top" style={{width: '99.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '12.1pt'}}>
                <p className="MsoNormal " style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>&nbsp;&nbsp;&nbsp;&nbsp;
                      Total</span></b></p>
              </td>
            </tr>
            <tr style={{ height: '13.45pt'}}>
              <td width={66} valign="top" style={{width: '49.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>Rate</span></b></p>
              </td>
              <td width={66} valign="top" style={{width: '49.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>Amount</span></b></p>
              </td>
            </tr>
            <tr style={{ height: '13.45pt'}}>
              <td width={37} valign="top" style={{width: '27.95pt', borderTop: 'none', borderLeft: 'solid windowtext 1.5pt', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>1.</span></b></p>
              </td>
              <td width={189} valign="top" style={{textAlign:"left",width: '141.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>Rent-Taxi/Cab
                      Service</span></b></p>
              </td>
              <td width={47} valign="top" style={{width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;1</span></p>
              </td>
              <td width={76} valign="top" style={{width: '2.0cm', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>
                    {formData.baseRent}</span></p>
              </td>
              <td width={151} colSpan={2} valign="top" style={{width: '4.0cm', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>
                    {formData.baseRent}</span></p>
              </td>
              <td width={66} valign="top" style={{width: '49.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}> n/A</span></p>
              </td>
              <td width={66} valign="top" style={{width: '49.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;
                    -</span></p>
              </td>
              <td width={132} valign="top" style={{width: '99.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>{formData.baseRent}</span></p>
              </td>
            </tr>
            <tr style={{ height: '13.45pt'}}>
              <td width={37} valign="top" style={{width: '27.95pt', borderTop: 'none', borderLeft: 'solid windowtext 1.5pt', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>2.</span></b></p>
              </td>
              <td width={189} valign="top" style={{textAlign:"left",width: '141.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span className="GramE"><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>Used(</span></b></span><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>in kms)&nbsp;&nbsp; </span></b></p>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>{formData.kmUsed}</span></b></p>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>{`(@₹`+`${formData.dieselRate}`+`/Litre)`}</span></b></p>
              </td>
              <td width={47} valign="top" style={{width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;1</span></p>
              </td>
              <td width={76} valign="top" style={{width: '2.0cm', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {formData.kmUsed/10 * formData.dieselRate}</span></p>
              </td>
              <td width={151} colSpan={2} valign="top" style={{width: '4.0cm', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {formData.kmUsed/10 * formData.dieselRate}</span></p>
              </td>
              <td width={66} valign="top" style={{width: '49.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    - </span></p>
              </td>
              <td width={66} valign="top" style={{width: '49.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    -</span></p>
              </td>
              <td width={132} valign="top" style={{width: '99.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>{formData.kmUsed/10 * formData.dieselRate}</span></p>
              </td>
            </tr>
            <tr style={{ height: '13.45pt'}}>
              <td width={37} valign="top" style={{width: '27.95pt', borderTop: 'none', borderLeft: 'solid windowtext 1.5pt', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>3.</span></b></p>
              </td>
              <td width={189} valign="top" style={{textAlign:"left",width: '141.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>Parking</span></b></p>
              </td>
              <td width={47} valign="top" style={{width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;1</span></p>
              </td>
              <td width={76} valign="top" style={{width: '2.0cm', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {formData.parking}</span></p>
              </td>
              <td width={151} colSpan={2} valign="top" style={{width: '4.0cm', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {formData.parking}</span></p>
              </td>
              <td width={66} valign="top" style={{width: '49.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    - </span></p>
              </td>
              <td width={66} valign="top" style={{width: '49.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    -</span></p>
              </td>
              <td width={132} valign="top" style={{width: '99.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>{formData.parking}</span></p>
              </td>
            </tr>
            <tr style={{ height: '13.45pt'}}>
              <td width={37} valign="top" style={{width: '27.95pt', borderTop: 'none', borderLeft: 'solid windowtext 1.5pt', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>4.</span></b></p>
              </td>
              <td width={189} valign="top" style={{textAlign:"left",width: '141.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>Toll Tax</span></b></p>
              </td>
              <td width={47} valign="top" style={{width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;1</span></p>
              </td>
              <td width={76} valign="top" style={{width: '2.0cm', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {formData.tollTax}</span></p>
              </td>
              <td width={151} colSpan={2} valign="top" style={{width: '4.0cm', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {formData.tollTax}</span></p>
              </td>
              <td width={66} valign="top" style={{width: '49.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    - </span></p>
              </td>
              <td width={66} valign="top" style={{width: '49.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    -</span></p>
              </td>
              <td width={132} valign="top" style={{width: '99.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>{formData.tollTax}</span></p>
              </td>
            </tr>
            <tr style={{ height: '13.45pt'}}>
              <td width={37} valign="top" style={{width: '27.95pt', borderTop: 'none', borderLeft: 'solid windowtext 1.5pt', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>5.</span></b></p>
              </td>
              <td width={189} valign="top" style={{textAlign:"left",width: '141.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>Overtime</span></b></p>
              </td>
              <td width={47} valign="top" style={{width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;1</span></p>
              </td>
              <td width={76} valign="top" style={{width: '2.0cm', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {formData.overtime}</span></p>
              </td>
              <td width={151} colSpan={2} valign="top" style={{width: '4.0cm', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {formData.overtime}</span></p>
              </td>
              <td width={66} valign="top" style={{width: '49.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    - </span></p>
              </td>
              <td width={66} valign="top" style={{width: '49.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    -</span></p>
              </td>
              <td width={132} valign="top" style={{width: '99.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>{formData.overtime}</span></p>
              </td>
            </tr>
            <tr style={{ height: '13.45pt'}}>
              <td width={37} valign="top" style={{width: '27.95pt', borderTop: 'none', borderLeft: 'solid windowtext 1.5pt', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>6.</span></b></p>
              </td>
              <td width={189} valign="top" style={{textAlign:"left",width: '141.4pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>Extra used for</span></b></p>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>&nbsp;<span className="GramE">Distance(</span>in Kms)</span></b></p>
              </td>
              <td width={47} valign="top" style={{width: '35.45pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;1</span></p>
              </td>
              <td width={76} valign="top" style={{width: '2.0cm', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {formData.extraKms}</span></p>
              </td>
              <td width={151} colSpan={2} valign="top" style={{width: '4.0cm', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {formData.extraKms}</span></p>
              </td>
              <td width={66} valign="top" style={{width: '49.6pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    - </span></p>
              </td>
              <td width={66} valign="top" style={{width: '49.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    -</span></p>
              </td>
              <td width={132} valign="top" style={{width: '99.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>{formData.extraKms}</span></p>
              </td>
            </tr>
            <tr style={{ height: '13.45pt'}}>
              <td width={37} valign="top" style={{width: '27.95pt', borderTop: 'none', borderLeft: 'solid windowtext 1.5pt', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>7.</span></b></p>
              </td>
              <td width={595}  colSpan={7} valign="top" style={{width: '446.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '16.0pt'}}>Total</span></b></p>
              </td>
              <td width={132} valign="top" style={{width: '99.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;{formData.baseRent + ((formData.kmUsed/10) * formData.dieselRate) + formData.parking + formData.tollTax + formData.overtime + (formData.extraKms/10 * formData.dieselRate)}</span></p>
              </td>
            </tr>
            <tr style={{ height: '13.45pt'}}>
              <td width={349} colSpan={4} valign="top" style={{width: '261.5pt', borderTop: 'none', borderLeft: 'solid windowtext 1.5pt', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal"  style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'center', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>Total Bill amount in Words</span></b></p>
              </td>
              <td width={284} colSpan={4} valign="top" style={{width: '212.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '12.0pt'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b>&nbsp;Total amount without Tax </b></span></p>
              </td>
              <td width={132} valign="top" style={{width: '99.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;{formData.baseRent + ((formData.kmUsed/10) * formData.dieselRate) + formData.parking + formData.tollTax + formData.overtime + (formData.extraKms/10 * formData.dieselRate)}</span></p>
              </td>
            </tr>
            <tr style={{ height: '13.45pt'}}>
              <td width={349} colSpan={4} rowSpan={3} valign="top" style={{width: '261.5pt', borderTop: 'none', borderLeft: 'solid windowtext 1.5pt', borderBottom: 'solid windowtext 1.5pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal"  style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'center', lineHeight: 'normal'}}><span className="GramE"><span lang="EN-US" style={{fontSize: '12.0pt'}}>{numberToWords(formData.baseRent + ((formData.kmUsed/10) * formData.dieselRate) + formData.parking + formData.tollTax + formData.overtime + (formData.extraKms/10 * formData.dieselRate))}</span></span>
                {/* <span lang="EN-US" style={{fontSize: '12.0pt'}}> Thousand</span> */}
                </p>
                {/* <p className="MsoNormal"  style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'center', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '12.0pt'}}>Eight Hundred <span className="GramE">Sixty Five</span></span></p> */}
                {/* <p className="MsoNormal"  style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'center', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '12.0pt'}}>INR</span></p> */}
              </td>
              <td width={284} colSpan={4} valign="top" style={{width: '212.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>Add:
                      IGST&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =0</span></b></p>
              </td>
              <td width={132} valign="top" style={{width: '99.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp; n/A</span></p>
              </td>
            </tr>
            <tr style={{ height: '13.45pt'}}>
              <td width={284} colSpan={4} valign="top" style={{width: '212.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>Add:
                      IGST&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =0</span></b></p>
              </td>
              <td width={132} valign="top" style={{width: '99.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;&nbsp;&nbsp; n/A</span></p>
              </td>
            </tr>
            <tr style={{ height: '13.45pt'}}>
              <td width={284} colSpan={4} valign="top" style={{width: '212.65pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.0pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{fontSize: '12.0pt'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <b>&nbsp;Total amount with Tax</b></span></p>
              </td>
              <td width={132} valign="top" style={{width: '99.2pt', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '13.45pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><span lang="EN-US" style={{}}>&nbsp;&nbsp;{formData.baseRent + ((formData.kmUsed/10) * formData.dieselRate) + formData.parking + formData.tollTax + formData.overtime + (formData.extraKms/10 * formData.dieselRate)}</span></p>
              </td>
            </tr>
            <tr style={{ height: '10.85pt'}}>
              <td width={349} colSpan={4} valign="top" style={{width: '261.5pt', borderTop: 'none', borderLeft: 'solid windowtext 1.5pt', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '10.85pt'}}>
                <p className="MsoNormal"  style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'center', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>Bank Details</span></b></p>
              </td>
              <td width={416} colSpan={5} rowSpan={4} valign="top" style={{width: '11.0cm', borderTop: 'none', borderLeft: 'none', borderBottom: 'solid windowtext 1.5pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '10.85pt'}}>
                <p className="font-bahnschrift" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><i><span lang="EN-US" style={{}}>&nbsp; <span style={{color: 'gray'}}>Certifies that the
                              particular given above are true and correct</span></span></i></p>
                          <div className="flex justify-center" style={{ marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal' }}>
                              <img style={{mixBlendMode:"multiply"}} width={156} height={47} src="./sign.png" />
                          </div>
                <p className="MsoNormal"  style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', textAlign: 'center', lineHeight: 'normal'}}><span className="SpellE"><span lang="EN-US" style={{fontSize: '12.0pt'}}>Authorised</span></span><span lang="EN-US" style={{fontSize: '12.0pt'}}> Signatory: M/S
                    Jaya Prasad</span></p>
              </td>
            </tr>
            <tr style={{ height: '17.55pt'}}>
              <td width={349} colSpan={4} valign="top" style={{width: '261.5pt', borderTop: 'none', borderLeft: 'solid windowtext 1.5pt', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '17.55pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>Bank A/c No. : </span></b><span lang="EN-US" style={{fontSize: '12.0pt'}}>50100243426111</span></p>
              </td>
            </tr>
            <tr style={{ height: '10.05pt'}}>
              <td width={349} colSpan={4} valign="top" style={{width: '261.5pt', borderTop: 'none', borderLeft: 'solid windowtext 1.5pt', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '10.05pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>Bank IFSC : </span></b><span lang="EN-US" style={{fontSize: '12.0pt'}}>HDFC0004208</span></p>
              </td>
            </tr>
            <tr style={{ height: '26.8pt'}}>
              <td width={349} colSpan={4} valign="top" style={{width: '261.5pt', borderTop: 'none', borderLeft: 'solid windowtext 1.5pt', borderBottom: 'solid windowtext 1.0pt', borderRight: 'solid windowtext 1.5pt', padding: '0cm 5.4pt 0cm 5.4pt', height: '26.8pt'}}>
                <p className="MsoNormal" style={{marginTop: '0cm', marginRight: '0pt', marginBottom: '0cm', marginLeft: '0cm', lineHeight: 'normal'}}><b><span lang="EN-US" style={{fontSize: '12.0pt'}}>Bank A/c Holder -</span></b><span lang="EN-US" style={{fontSize: '12.0pt'}}>Jaya Prasad<b> </b></span></p>
              </td>
            </tr>
            <tr style={{ }}>
              <td width={37} style={{width: '27.75pt', padding: '0cm 0cm 0cm 0cm'}} />
              <td width={189} style={{width: '5.0cm', padding: '0cm 0cm 0cm 0cm'}} />
              <td width={47} style={{width: '35.25pt', padding: '0cm 0cm 0cm 0cm'}} />
              <td width={76} style={{width: '57.0pt', padding: '0cm 0cm 0cm 0cm'}} />
              <td width={28} style={{width: '21.0pt', padding: '0cm 0cm 0cm 0cm'}} />
              <td width={123} style={{width: '92.25pt', padding: '0cm 0cm 0cm 0cm'}} />
              <td width={66} style={{width: '49.5pt', padding: '0cm 0cm 0cm 0cm'}} />
              <td width={66} style={{width: '49.5pt', padding: '0cm 0cm 0cm 0cm'}} />
              <td width={132} style={{width: '99.0pt', padding: '0cm 0cm 0cm 0cm'}}>
                {/* <p className="MsoNormal" style={{marginBottom: '0cm'}}><span style={{fontSize: '10.0pt', lineHeight: '106%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p> */}
                {/* <p className="MsoNormal" style={{marginBottom: '0cm'}}><span style={{fontSize: '10.0pt', lineHeight: '106%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p> */}
                {/* <p className="MsoNormal" style={{marginBottom: '0cm'}}><span style={{fontSize: '10.0pt', lineHeight: '106%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p> */}
                <p className="MsoNormal" style={{marginBottom: '0cm'}}><span style={{fontSize: '10.0pt', lineHeight: '106%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                <p className="MsoNormal" style={{marginBottom: '0cm'}}><span style={{fontSize: '10.0pt', lineHeight: '106%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                <p className="MsoNormal" style={{marginBottom: '0cm'}}><span style={{fontSize: '10.0pt', lineHeight: '106%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
                <p className="MsoNormal" style={{marginBottom: '0cm'}}><span style={{fontSize: '10.0pt', lineHeight: '106%', fontFamily: '"Times New Roman",serif'}}>&nbsp;</span></p>
              </td>
            </tr>
          </tbody></table>
        {/* <p className="MsoNormal" style={{marginRight: '0pt'}}><span lang="EN-US" style={{}}>&nbsp;</span></p> */}
        <table className="w-full relative" border={0} cellSpacing={0} cellPadding={0} align="left" style={{borderCollapse: 'collapse', margin: '0 auto'}}>
  <tbody>
    <tr style={{height: '19.85pt'}}>
      <td width={756} style={{width: '20.0cm', borderTop: 'solid windowtext 2.25pt', borderLeft: 'none', borderBottom: 'solid windowtext 2.25pt', borderRight: 'none', background: '#D0CECE', padding: '0cm 5.4pt 0cm 5.4pt', height: '19.85pt'}}>
        <p className="MsoNormal" style={{marginBottom: '0cm', textAlign: 'center', lineHeight: 'normal'}}>
          <span lang="EN-US" style={{color: 'black'}}>&nbsp;</span>
        </p>
      </td>
    </tr>
  </tbody>
</table>

        {/* <p className="MsoNormal"></p> */}
      </div>
      </>
  )
}

export default BillPage