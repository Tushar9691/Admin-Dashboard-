// Show data in Table table.html
async function fetch_Data() {
    let sdata = await fetch("http://localhost:3000/customer");
    let res = await sdata.json();
  
    let data_store = res
      .map(
        (e) => `
          <tr>
              <td>${e.id}</td>
              <td>${e.name}</td>
              <td>${e.age}</td>
              <td>${e.gender}</td>
              <td>${e.admit}</td>
              <td>${e.status}</td>
              <td><i class="fa-solid fa-trash" onclick="mydelete('${e.id}')"></i></td>
              <td><i class="fa-solid fa-pen-to-square" onclick="myedit('${e.id}')"></i></td>
          </tr>
      `
      )
      .join("");
    document.getElementById("showdata").innerHTML = data_store;
  }
  fetch_Data();
  
  
  
  function insData() {
    // let fname1 = document.getElementById("id").value;
    let name1 = document.getElementById("name").value;
    let age1 = document.getElementById("age").value;
    let gender1 = document.getElementById("gender").value;
    let admit1 = document.getElementById("admit").value;
    let status1 = document.getElementById("status").value;
  
  
    let frmdata = {
   
      name: name1,
      age: age1,
      gender: gender1,
      admit: admit1,
      status: status1,
    };
  
    fetch("http://localhost:3000/customer", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(frmdata),
    })
      .then((re) => alert("Data Updated in table..."))
      .catch((t) => alert("Data not inserted........."));
  }
  
  
  
  function mydelete(id) {
    fetch(`http://localhost:3000/customer/${id}`, {
      method: 'DELETE'
    })
    .then((r) => alert("Deleted........"));
  }
  
  
  

  
  async function myedit(id){
      
      let r=await fetch(`http://localhost:3000/customer/${id}`)
      let d=await r.json()
  
      let frm=`
      <form action="" class="form" onsubmit="return finalupdate('${d.id}')">
                      <h1>Edit Data</h1>
                      <label for="oid0" read>Id</label>
                      <input type="text" value="${d.id}" id="id" readonly><br>
  
                      <label for="fname0">Name</label>
                      <input type="text" value="${d.name}" id="name1" ><br>
  
                      <label for="age">age</label>
                      <input type="text" value="${d.age}" id="age1" ><br>
  
                      <label for="gender">gender</label>
                      <input type="text" value="${d.gender}" id="gender1" ><br>
  
                      <label for="admit">admit</label>
                      <input type="text" value="${d.admit}" id="admit1" ><br>
  
                      <label for="status">status</label>
                      <input type="text" value="${d.status}" id="status1" ><br>
  
                     
                      <div class="btn">
                      <button type="submit">Update Data</button>
                      </div>
                  </form>
  
      `
      document.getElementById('editform').innerHTML=frm
  }
  
  
  function finalupdate(id){
  
      name1=document.getElementById("name1").value
      age1=document.getElementById("age1").value
      gender1=document.getElementById("gender1").value
      admit1=document.getElementById("admit1").value
      status1=document.getElementById("status1").value
  
  
  
  
        let frm={
          id:id1,
          name:name1,
          age:age1,
          gender:gender1,
          admit:admit1,
          status:status1,
        
      }
      console.log(frm);
    
      
  
      fetch(`http://localhost:3000/customer/${id}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(frm)
      })
      .then(r=>alert("Updated....."))

   
  
  }