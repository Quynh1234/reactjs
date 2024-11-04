import React, { useEffect, useState } from "react";
import axios from "axios";
import './showUsers.scss';
import { useNavigate } from 'react-router-dom';

const ShowUsers = () => {
    const [listUsers, setListUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('https://reqres.in/api/users?page=2');
                setListUsers(res.data.data || []);
            } catch (error) {
                console.error("Lỗi khi lấy danh sách người dùng", error);
            }
        };
        fetchUsers();
    }, []);

    const handleViewDetail = (user) => {
        navigate(`/user/${user.id}`); // Sử dụng navigate để điều hướng
    };

    return (
        <div className="list-user-container">
            <div className="title">
                Lấy danh sách người dùng
            </div>
            <div className="list-user-content">
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => (
                        <div className="child" key={item.id} onClick={() => handleViewDetail(item)}>
                            {index + 1} - {item.first_name} {item.last_name}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ShowUsers;
