import React from 'react';
import GetEventos from '../services/GetEventos';

var Eventos = React.createClass({
    getInitialState: function() {
        return ({
            list : []
        });
    },
    getList : function() {
        return GetEventos.list().then((response) => {
               this.setState({
                  list : response.data.eventos
              });
           });
    },
    componentDidMount: function() {
        return this.getList();
    },
    render: function() {
               var eventosList = this.state.list.map(function(evt, key) {
                 return (
                     <div className="col-md-3" key={key}>
                         <div className="ibox">
                             <div className="ibox-content product-box">
                                 <img className="img-responsive" src={ "https://nomenalista.net/" + evt.eflyer}></img>
                                 <div className="product-desc">
                                     <small className="text-muted">{evt.data_inicio}</small>
                                     <a href="#" className="product-name">{evt.nome}</a>
                                     <div className="m-t text-righ">
                                         <a href="#" className="btn btn-sm btn-primary">Comprar <i className="fa fa-long-arrow-right"></i> </a>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 );
               });

               return (
                   <div className="wrapper wrapper-content animated fadeInRight">
                       <div className="row">
                           {eventosList}
                     </div>
                 </div>
               );
           }
});

export default Eventos;
