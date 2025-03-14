import React from "react";
import { NavLink } from "react-router-dom";
function Features() {
    return (
        <div className=" min-h-screen w-full flex flex-col items-center justify-center p-10">
            {/* Container for cards */}
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl">
                {/* Card 1 */}
                <NavLink to='/financelearning'>
                <div className="bg-[#2A2A2A] border border-[#5A5A5A] rounded-lg shadow-lg p-6 text-white w-72 transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-semibold mb-2">Financial Learning</h3>
                    <p className="text-gray-400">Description of Feature 1</p>
                </div>
                </NavLink>
                {/* Card 2 */}
                <div className="bg-[#2A2A2A] border border-[#5A5A5A] rounded-lg shadow-lg p-6 text-white w-72 transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-semibold mb-2">Expense Tracker</h3>
                    <p className="text-gray-400">Description of Feature 2</p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#2A2A2A] border border-[#5A5A5A] rounded-lg shadow-lg p-6 text-white w-72 transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-semibold mb-2">Investment</h3>
                    <p className="text-gray-400">Description of Feature 3</p>
                </div>

                {/* Card 4 */}
                <NavLink to='/sipcalculator'>
                <div className="bg-[#2A2A2A] border border-[#5A5A5A] rounded-lg shadow-lg p-6 text-white w-72 transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-semibold mb-2">SIP Calculator</h3>
                    <p className="text-gray-400">Description of Feature 4</p>
                </div>
                </NavLink>
                {/* Card 5 */}
                <NavLink to='/emicalculator'>
                <div className="bg-[#2A2A2A] border border-[#5A5A5A] rounded-lg shadow-lg p-6 text-white w-72 transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-semibold mb-2">EMI Calculator</h3>
                    <p className="text-gray-400">Description of Feature 5</p>
                </div>
                </NavLink>
               
                {/* Card 6 */}
                <NavLink to='/community'>
                <div className="bg-[#2A2A2A] border border-[#5A5A5A] rounded-lg shadow-lg p-6 text-white w-72 transition-transform transform hover:scale-105">
                    <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                    <p className="text-gray-400">Description of Feature 6</p>
                </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Features;
