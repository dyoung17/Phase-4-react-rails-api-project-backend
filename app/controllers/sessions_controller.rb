class SessionsController < ApplicationController


    def login
        user = Volunteer.find_by!(username: params[:username])    
        if user&.authenticate(params[:password])
          session[:volunteer_id] = user.id
            render json: user, status: :ok
        else
          render json: {errors: "Invalid Password or Username"}, status: :unprocessable_entity
        end
    end

    def logout
        session.delete :volunteer_id
        head :no_content
    end 
end