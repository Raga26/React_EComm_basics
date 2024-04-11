import { Component } from "react";

export default class CustomersList extends Component{

    state = { 
        pageTitle:"web page" ,
        pageCount:7,
        pages: [
            {
                name:"c# .net", usage :"backend",
                photo: "https://picsum.photos/id/1010/60"
            },
            {
                name:"Jquery" , usage :null ,
                photo: "https://picsum.photos/id/1011/60"
            },
            {
                name:"java" , usage : "backend",
                photo: "https://picsum.photos/id/1012/60"
            }
        ]
        };

    render(){
        return <div>
            <h4 className="border-bottom m-1 p-1">
                {this.state.pageTitle}

                <span className="badge badge-secondary m-2 highlight">
                    {this.state.pageCount}
                </span>
            </h4>

            <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>

            <table className="table">

                <thead>
                    <tr>
                        <th>name</th>
                        <th>usage</th>
                        <th>image</th>
                    </tr>
                </thead>

                <tbody>{this.getPageRow()}</tbody>

            </table>
        </div>;
    }

    //executes when user clicksrefresh button
    onRefreshClick = () => {
        console.log("Refresh clicked");
        this.setState({
            pageCount:5,
            pageTitle:"refreshed page"
        })
    }

    getUsageToRender = (usage) =>{
        return (usage == null)? 
        (<div className="bg-warning p-2 text-center">Prog land</div> ) 
        : usage ;
    }

    getPageRow = () =>{
        return (
            this.state.pages.map((page , index) => {
                return (
                <tr key={page.name}>

                    <td>{page.name}</td>

                    <td>{this.getUsageToRender(page.usage)} </td>

                    <td>
                        <img src={page.photo} alt="img for testing"/>
                        <div>
                            <button 
                            className="btn btn-sm btn-secondary" 
                            onClick={ () => { this.onChangePictureClick(page , index);}}>
                                change photo
                            </button>
                        </div>
                    </td>

                </tr>
                );
            })
        )
    }

    onChangePictureClick = (pageParam , indexParam) =>{
        console.log(pageParam);
        console.log(indexParam);

        var currPage = this.state.pages;
        currPage[indexParam].photo = "https://picsum.photos/id/154/60"
        this.setState({pages : currPage});
    }
}