import UserCard from "./UserCard";

const ParentChild= ()=>{
    const userInfo=[{"id":1,"email":"john@mail.com","password":"changeme","name":"Jhon","role":"customer","avatar":"https://i.imgur.com/LDOO4Qs.jpg","creationAt":"2026-02-08T08:11:49.000Z","updatedAt":"2026-02-08T08:11:49.000Z"},{"id":2,"email":"maria@mail.com","password":"12345","name":"Maria","role":"customer","avatar":"https://i.imgur.com/DTfowdu.jpg","creationAt":"2026-02-08T08:11:49.000Z","updatedAt":"2026-02-08T08:11:49.000Z"},{"id":3,"email":"admin@mail.com","password":"admin123","name":"Admin","role":"admin","avatar":"https://i.imgur.com/yhW6Yw1.jpg","creationAt":"2026-02-08T08:11:49.000Z","updatedAt":"2026-02-08T08:11:49.000Z"},{"id":22,"email":"mohadmin@gmail.com","password":"123456","name":"mohammed","role":"admin","avatar":"https://api.lorem.space/image/face?w=150&h=220","creationAt":"2026-02-08T10:59:55.000Z","updatedAt":"2026-02-08T10:59:55.000Z"},{"id":23,"email":"admin@admin.com","password":"1234","name":"admin","role":"admin","avatar":"https://i.pravatar.cc/300","creationAt":"2026-02-08T11:00:40.000Z","updatedAt":"2026-02-08T11:00:40.000Z"},{"id":24,"email":"user01@gmail.com","password":"1234","name":"user01","role":"admin","avatar":"https://i.pravatar.cc/300","creationAt":"2026-02-08T11:06:32.000Z","updatedAt":"2026-02-08T11:06:32.000Z"},{"id":25,"email":"lorie.funk@hotmail.com","password":"UdtIA5Qpu9","name":"Barton Swift","role":"customer","avatar":"https://i.pravatar.cc/150","creationAt":"2026-02-08T11:10:34.000Z","updatedAt":"2026-02-08T11:10:34.000Z"},{"id":26,"email":"moh@gmail.com","password":"123456","name":"mohammed","role":"customer","avatar":"https://api.lorem.space/image/face?w=150&h=220","creationAt":"2026-02-08T11:12:43.000Z","updatedAt":"2026-02-08T11:12:43.000Z"},{"id":27,"email":"nico@gmail.com","password":"1234","name":"Nicolas","role":"customer","avatar":"https://picsum.photos/800","creationAt":"2026-02-08T11:14:31.000Z","updatedAt":"2026-02-08T11:14:31.000Z"},{"id":28,"email":"osama.mekawy@gmail.com","password":"osama123","name":"osama","role":"customer","avatar":"https://api.escuelajs.co/api/v1/files/fb6b.jpg","creationAt":"2026-02-08T11:23:00.000Z","updatedAt":"2026-02-08T11:23:00.000Z"},{"id":29,"email":"zachary.davis@yahoo.com","password":"HN5665U93w","name":"Candi Marquardt II","role":"customer","avatar":"https://i.pravatar.cc/150","creationAt":"2026-02-08T11:26:31.000Z","updatedAt":"2026-02-08T11:26:31.000Z"},]
    return(
        <>
            <div className="conatiner">
                <div className="row g-4">
                    {
                        userInfo.map((val,index)=>{
                            return(
                                <div className="col-4">
                                    <UserCard avatar={val.avatar} name={val.name} role={val.role}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ParentChild;