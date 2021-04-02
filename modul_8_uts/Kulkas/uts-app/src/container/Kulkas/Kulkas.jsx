import React, { Component } from "react";
import './Kulkas.css';
import Post from "../../component/Kulkas/Post";

class Kulkas extends Component {
    state = {
        listProduk: []
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/kulkas')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listProduk: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleGetKulkas = data => {
        fetch(`http://localhost:3001/kulkas/${data}`, { method: "GET" })
            .then(response => response.json())
            .then(res => {
                // this.handleUpdateList(data, res);
                var dataKulkas = { ...this.state.insertKeranjang };
                dataKulkas["id"] = res["id"];
                dataKulkas["nama"] = res["nama"];
                dataKulkas["harga"] = res["harga"];
                dataKulkas["stok"] = res["stok"];
                dataKulkas["qty"] = 1;
                this.setState({
                    insertKeranjang: dataKulkas
                });
            })
            .then(() => {
                this.handleCekKeranjang(data);
            })
            .then(() => {
                this.handleTombolSimpan();
            });
    };

    handleCekKeranjang = data => {
        fetch(`http://localhost:3002/keranjang/${data}`, { method: "GET" }).then(
            response => {
                if (response.ok) {
                    response.json().then(res => {
                        this.handleUpdateKeranjang(data, res);
                        this.ambilDataDariServerAPI();
                    });
                } else {
                    this.handleTombolSimpan();
                }
            }
        );
    };

    handleUpdateKeranjang = (data, res) => {
        fetch(`http://localhost:3002/keranjang/${data}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: res["id"],
                nama: res["nama"],
                harga: res["harga"],
                stok: res["stok"],
                qty: res["qty"] + 1
            })
        });
    };

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/keranjang', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="post-kulkas">
                {
                /* <div className="form pb-2 border-bottom">
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div> */}
                <center><h2>Daftar Barang</h2></center>
                <div className="tgh">
                    {
                        this.state.listProduk.map(kulkas => {
                            return (
                                <Post
                                    key={kulkas.id}
                                    id={kulkas.id}
                                    nama={kulkas.nama}
                                    harga={kulkas.harga}
                                    gambar={kulkas.gambar}
                                    stok={kulkas.stok}
                                    tambahKulkas={this.handleGetKulkas} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Kulkas;