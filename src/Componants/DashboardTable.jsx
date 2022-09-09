import React from "react";
export const DashboardTable = ({ item }) => {
    return (
        <div>

            {/* table for dashboard, save registration data in table format  */}

            <table>
                <tr>
                    <th>Full Name</th>
                    <td>{item.fullname}</td>
                </tr>
                <tr>
                    <th>User Name</th>
                    <td>{item.username}</td>
                </tr>
                <tr>
                    <th>Country</th>
                    <td>{item.country}</td>
                </tr>
                <tr>
                    <th>Email ID</th>
                    <td>{item.email}</td>
                </tr>
                <tr>
                    <th>Mobile Number</th>
                    <td>{item.mobile}</td>
                </tr>
                <tr>
                    <th>Referral ID</th>
                    <td>{item.referral}</td>
                </tr>

            </table>
        </div>
    )
}