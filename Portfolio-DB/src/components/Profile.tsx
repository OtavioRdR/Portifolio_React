const Profile: React.FC = () => {
    return (
            <section className="profile">
                <div className="profile-container">
                    <h1>
                        Olá, meu nome é <br/>
                        <span>Otavio Rosa</span>
                    </h1>
                    <p style={{ fontFamily: "'TT-Supermolot-Neue-Trial', sans-serif", fontSize: '36px' }}>
                        Sou trainee de Quality Assurance<br/>
                         na DBServer.
                    </p>
                </div>
                <img src="/assets/image.png" alt="Foto do Otavio"/>
            </section>
    )
}

export default Profile;