class SessionsController < ApplicationController


    def login
        user = Volunteer.find_by!(username: params[:username])    
        if user&.authenticate(params[:password])
          session[:volunteer_id] = volunteer.id
            render json: user, status: :created
        else
          render json: {errors: "Invalid Password and/or Username"}, status: :unprocessable_entity
        end
    end

    def logout
        session.delete :volunteer_id
        head :no_content
    end 
end