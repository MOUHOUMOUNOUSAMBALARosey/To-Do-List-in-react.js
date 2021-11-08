import React,{useState} from 'react';
import './App.css'
import '../node_modules/bulma/css/bulma.min.css'
import Header from './Composant/Header/Header'
import Card from './Composant/Card/Card';

function App() {

const [monState,setMonState] = useState([
  {tache: 'promener le chien', txt:'une fois à 8h,une fois à 19h'},
  {tache: 'creation du app web', txt:'apprendre rect'},
  {tache: 'prendre une pause', txt:'15 min toutes les 2 heures'}
])

const [tache,setTache] = useState();
const[txt,setTxt] = useState();

function creationCarte(e){
 e.preventDefault();
 //console.log(tache,txt);
 const nvTab = [...monState, {tache: tache, txt:txt}]
 setMonState(nvTab);
 console.log(nvTab);
 setTache('');
 setTxt('');
}

function supprCarte(index) {
  // console.log('hello word');

  // console.log(index);
  const tabNettoyage = [...monState];
  //  console.log(tabNettoyage.filter(item => tabNettoyage.indexOf(item) 
  //  !== tabNettoyage.indexOf(tabNettoyage[index])));

   setMonState(tabNettoyage.filter(item => tabNettoyage.indexOf(item) 
   !== tabNettoyage.indexOf(tabNettoyage[index])))
}


  return (
    <div>
      
        <Header/>

        <div className='container px-3'>
          <h2 className='title mt-5'>
            Rentrer vos taches à faire
          </h2>

          <form onSubmit={creationCarte}>
            <div className='field'>
              <div className='control'>
                <label htmlFor="tache" className='label'>Tache</label>
                <input 
                 value={tache}
                className='input'
                 type="text"
                 id='tache'
                 placeholder='Une tache à faire' 
                 onChange={e =>setTache(e.target.value)}/>
              </div>
            </div>

            <div className='field'>
              <div className='control'>
                <label htmlFor="txt" className='label'>Contenu de la tache</label>
               <textarea 
               className='textarea'
               value={txt}
                 type="text"
                 id='txt'
                 placeholder='Une tache à faire'
                 onChange={e =>setTxt(e.target.value)}
                 >
                  

               </textarea>
                
                
              </div>
            </div>
            <div className="control">
              <button type='submit' className='button is-link'>Creer une tache</button>
            </div>

          </form>
           {
             monState.map((todo,index)=>(
               <Card 
               key={index }
               index = {index}
               tache={todo.tache}
               txt={todo.txt}
               supprFunc = {supprCarte}
               />
             ))
           }
        </div>
    </div>
  );
}

export default App;
